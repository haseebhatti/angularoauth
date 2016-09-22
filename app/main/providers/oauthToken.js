(function () {
  'use strict';
  function OAuthToken () {
    var token = null;

    function setToken (token) {
      this.token = token;
    }
    function getToken () {
      return this.token;
    }
    function removeToken () {
      this.token = null;
    }
    return {
      token: token,
      setToken: setToken,
      getToken: getToken,
      removeToken: removeToken

    };
  }
  angular.module('app.oauth')
    .factory('OAuthToken', OAuthToken);
}());
