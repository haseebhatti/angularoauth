(function () {
  'use strict';

  var $httpProvider, OAuth;
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
    var $httpBackend, $http;
    beforeEach(module('app.oauth', function ($provide) {
      $provide.value('OAuthToken', {getToken: function () {
          return 'myToken';
      }});
    }));

    beforeEach(inject(function (_$httpBackend_, _$http_) {
      $httpBackend = _$httpBackend_;
      $http = _$http_;
    }));

    it('should token in the headers after setting', function () {
      var token = 'myToken';
      var url = 'http://example.com';

      $httpBackend.expectGET(url, function (headers) {
        expect(headers.Authorization).toBeDefined();
        expect(headers.Authorization).toEqual('Bearer myToken');
        return headers;
      }).respond(200);

      $http.get(url);
      $httpBackend.flush();
    });
  });
}());
