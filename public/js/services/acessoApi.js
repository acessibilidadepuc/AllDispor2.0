
(function(){
  'use strict';
  angular
  .module("myapp")

  .factory("acessoApi", acessoApi);

  acessoApi.$inject = ['$http']

  function acessoApi($http){
      var _login = function(acesso){
        return $http.post("http://localhost:3000/instituicao/login", acesso)
      };

      return {
        login:_login
      }
  }
})()
