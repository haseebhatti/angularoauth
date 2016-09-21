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
    return {
      token: token,
      setToken: setToken,
      getToken: getToken
    };
  }
  function OAuth (OAuthToken) {
    function request (config) {
      config.headers['Authorization'] = 'Bearer ' + OAuthToken.getToken();
      return config;
    }
    return {
      request: request
    };
  }
  angular.module('app.oauth')
    .factory('OAuth', OAuth)
    .factory('OAuthToken', OAuthToken);
}());
