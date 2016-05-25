(function(){
  'use strict';

  angular
  .module('app')
  .controller('loginController', loginController);

  loginController.$inject = ['loginApi', '$scope'];

  function loginController(loginApi, $scope){
    $scope.login = function(acesso){
      debugger
      loginApi.login(acesso).success(function(data){
        localStorage.setItem('token', data);

        window.location.assign("http://www.w3schools.com");

      });
    }

    $scope.logout = function(){
      localStorage.removeItem('token');
    }
  }
})()
