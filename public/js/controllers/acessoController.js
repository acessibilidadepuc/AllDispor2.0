(function(){
  'use strict';

  angular
  .module('myapp')
  .controller('acessoController', acessoController);

  acessoController.$inject = ['acessoApi', '$scope'];

  function acessoController(acessoApi, $scope){
    $scope.login = function(acesso){
      console.log(acesso);
      acessoApi.login(acesso).success(function(data){
        localStorage.setItem('token', data);
      });
    }

    $scope.logout = function(){
      localStorage.removeItem('token');
    }
  }
})()
