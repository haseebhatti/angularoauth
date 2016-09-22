(function () {
  'use strict';
  var tokenConfig = function ($httpProvider) {
    $httpProvider.interceptors.push('OAuth');
  };
  tokenConfig.$inject = ['$httpProvider'];

  angular.module('app.oauth', [])
    .config(tokenConfig);
}());
