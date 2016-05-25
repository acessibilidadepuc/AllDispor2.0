(function(){
  'use strict';

  angular
  .module('app')
  .controller('cadastroController', cadastroController);

  cadastroController.$inject = ['cadastroApi', '$scope'];

  function cadastroController(cadastroApi, $scope){
    $scope.efetuarCadastro = function(cadastro){
      console.log(cadastro);
      cadastroApi.cadastro(cadastro).success(function(data){
        //redirecionar para o módulo
        window.location = "file:///C:/Users/USER/Desktop/modulos/index.html#/home";

        localStorage.setItem('token', data);
      });
    }

    $scope.adicionaRecurso = function(recursos){

    }

    $scope.logout = function(){
      localStorage.removeItem('token');
    }
  }
})()
