(function () {
  'use strict';

  var $httpProvider, OAuth,  url = 'http://example.com';
  describe('service unit test', function () {
    beforeEach(module('app.oauth', function (_$httpProvider_) {
      $httpProvider = _$httpProvider_;
    }));

    beforeEach(inject(function (_OAuth_) {
      OAuth = _OAuth_;
    }));

    it('should contain token service', function () {
      expect($httpProvider.interceptors).toContain('OAuth');
    });
  });

  describe('HTTP test', function () {
    var $httpBackend, $http, OAuthToken, rootScope;
    beforeEach(module('app.oauth'));

    beforeEach(inject(function (_$httpBackend_, _$http_, _OAuthToken_, $rootScope) {
      $httpBackend = _$httpBackend_;
      $http = _$http_;
      spyOn(_OAuthToken_, 'getToken').andReturn('myToken');
      spyOn(_OAuthToken_, 'removeToken');
      spyOn($rootScope, '$emit');
      rootScope = $rootScope;
      OAuthToken = _OAuthToken_;
    }));

    it('should token in the headers after setting', function () {
      var token = 'myToken';

      $httpBackend.expectGET(url, function (headers) {
        expect(headers.Authorization).toBeDefined();
        expect(headers.Authorization).toEqual('Bearer myToken');
        return headers;
      }).respond(200);

      resolveUrl();
    });
    it('should remove token when 400 occurs', function () {
      $httpBackend.expectGET(url).respond(400);
      resolveUrl();
      expect(OAuthToken.removeToken).toHaveBeenCalled();
    });
    it('should emit error given 401', function () {
      $httpBackend.expectGET(url).respond(401);
      resolveUrl();
      expect(rootScope.$emit).toHaveBeenCalledWith('oauth:error', jasmine.any(Object));
    });
    it('should emit error given 400', function () {
      $httpBackend.expectGET(url).respond(400);
      resolveUrl();
      expect(rootScope.$emit).toHaveBeenCalledWith('oauth:error', jasmine.any(Object));
    });

    function resolveUrl () {
      $http.get(url);
      $httpBackend.flush();
    }
  });
}());
