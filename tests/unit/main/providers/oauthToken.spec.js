(function () {
  'use strict';
  describe('token service', function () {
    var OAuthToken;
    beforeEach(module('app.oauth'));
    beforeEach(inject(function (_OAuthToken_) {
      OAuthToken = _OAuthToken_;
    })
    );
    it('should set a token ', function () {
      OAuthToken.setToken('mockToken');
      expect(OAuthToken.token).toEqual('mockToken');
    });
    it('should get a token', function () {
      OAuthToken.setToken('token');
      expect(OAuthToken.getToken()).toEqual('token');
    });
    it('should be able to remove a token', function () {
      OAuthToken.setToken('token');
      OAuthToken.removeToken();
      expect(OAuthToken.getToken()).toEqual(null);
    });
  });
}());
