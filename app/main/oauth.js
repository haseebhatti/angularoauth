(function () {
  'use strict';
  var tokenConfig = function ($httpProvider) {
    $httpProvider.interceptors.push('TokenService');
  };
  tokenConfig.$inject = ['$httpProvider'];

  function oauthCtrl ($http) {
    var x;
    $http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
      x = data;
    });
    console.log(x);
  }

  angular.module('app.oauth', [])
    .config(tokenConfig)
    .controller('oauthCtrl', oauthCtrl);
}());
