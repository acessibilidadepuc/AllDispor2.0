(function(){
  'use strict';

  angular
  .module('app')
  .controller('cadastroController', cadastroController);

  cadastroController.$inject = ['cadastroApi', '$scope'];

  var recursoArray = [];
  var recurso = {descricao:'',estrutura: '', quantidade:''};

//  var recursoObj = {nome:'',descricao: '', quantidade:''}

  function cadastroController(cadastroApi, $scope){

    $scope.adicionaRecurso = function(recurso){
      recurso = {descricao: recurso.descricaoRec,estrutura: recurso.nomeRec,quantidade: recurso.quantidadeRec}
      recursoArray.push(recurso);
      console.log(recursoArray);
    }

    $scope.efetuarCadastro = function(cadastro){

      cadastro.recursos = recursoArray;
      console.log(cadastro);
      cadastroApi.cadastro(cadastro).success(function(data){
        //redirecionar para o módulo
        //window.location = "file:///C:/Users/USER/Desktop/modulos/index.html#/home";

        localStorage.setItem('token', data);
      });
    }

    $scope.logout = function(){
      localStorage.removeItem('token');
    }
  }
})()
