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
        alert(data);
        if(data != null){
            localStorage.setItem('token', data.acesso.token);
            if(data.permissao.tipoPermissao == "ADMIN")
            {
              alert("Bem vindo Sr." + data.acesso.login +", seu token: " + data.acesso.token);
              //redirecionar para o módulo
              window.location = "file:///C:/Users/USER/Desktop/modulos/index.html#/home";
            }
            else
            {
              alert("Bem vindo Sr." + data.acesso.login +", seu token: " + data.acesso.token);
              //redirecionar para o módulo
              window.location = "file:///C:/Users/USER/Desktop/modulos/index.html#/home";
            }
        }
      });
    }

    $scope.logout = function(){
      localStorage.removeItem('token');
    }
  }
})()
