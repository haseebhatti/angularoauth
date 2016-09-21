(function () {
  'use strict';
  function TokenService () {
    var token = null;

    function setToken (token) {
      this.token = token;
    }
    function getToken () {
      return this.token;
    }
    return {
      token: token,
      setToken: setToken,
      getToken: getToken
    };
  }
  angular.module('app.oauth')
    .factory('TokenService', TokenService);
}());
