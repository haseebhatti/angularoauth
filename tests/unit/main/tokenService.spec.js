(function () {
  'use strict';
  describe('token service', function () {
    var TokenService;
    beforeEach(module('app.oauth'));
    beforeEach(inject(function (_TokenService_) {
      TokenService = _TokenService_;
    })
    );
    it('should set a token ', function () {
      TokenService.setToken('mockToken');
      expect(TokenService.token).toEqual('mockToken');
    });
    it('should get a token', function () {
      TokenService.setToken('token');
      expect(TokenService.getToken()).toEqual('token');
    });
  });
}());
