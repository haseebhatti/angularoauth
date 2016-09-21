(function () {
  'use strict';

  var $httpProvider;
  describe('service unit test', function () {
    beforeEach(module('app.oauth', function (_$httpProvider_) {
      $httpProvider = _$httpProvider_;
    }));
    beforeEach(inject(function () {}));

    it('should contain token service', function () {
      expect($httpProvider.interceptors).toContain('TokenService');
    });
  });
  describe('OauthCtrl', function () {
    var httpBackend, oauthCtrl, scope;
    beforeEach(module('app.oauth'));
    beforeEach(inject(function ($httpBackend, $controller, $rootScope) {
      httpBackend = $httpBackend;
      scope = $rootScope.$new();
      httpBackend.whenGET('http://jsonplaceholder.typicode.com/posts').respond('you got data');
      oauthCtrl = $controller('oauthCtrl', {
        $scope: scope
      });
    }));
    afterEach(function () {});
    it('should', function () {});
  });
}());
