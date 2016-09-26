/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("cadastroUsuario").controller("loginController",function($scope, $window){
     $scope.login = [];


    $scope.efetuarLogin=function(login){
            alert(login.usuario);
        loginService.loga(login).success(function(data){
            delete $scope.login;
            $scope.loginForm.$setPristine();
        }).error(function (data) {
            $scope.message = "Aconteceu um problema: " + data;
        });


    };

    $scope.abrirLogin =function(){

        $window.location.href="login.html";
    };
});

