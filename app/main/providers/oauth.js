(function () {
  'use strict';

  function OAuth (OAuthToken, $rootScope) {
    function request (config) {
      config.headers['Authorization'] = 'Bearer ' + OAuthToken.getToken();
      return config;
    }
    function responseError (rejection) {
      if (rejection.status === 400) {
        $rootScope.$emit('oauth:error', rejection);
        OAuthToken.removeToken();
      }
      else if (rejection.status === 401) {
        $rootScope.$emit('oauth:error', rejection);
      }
      return rejection;
    }
    return {
      request: request,
      responseError: responseError
    };
  }
  angular.module('app.oauth')
    .factory('OAuth', OAuth);
}());
