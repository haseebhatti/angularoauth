(function () {
  'use strict';

  function myController ($parse) {
    var vm = this;
    vm.refresh = function () {
      vm.fnString = $parse(vm.enter).toString();
    };
    vm.name = 'this is my controller';
  }
  angular
    .module('myApp', [])
    .controller('myController', myController);
})();
