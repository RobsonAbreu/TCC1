ngular.module("Usuario", [])
        .value('urlBase', 'http://localhost:8080/aprendendo-java-backend/rest/')
        .controller("UsuarioController", function ($http, urlBase) {
            
            self.usuario = undefined;

            self.novo = function () {
                self.usuario = {};
            };

            self.salvar = function () {
                var metodo = 'POST';
                if (self.usuario.id) {
                    metodo = 'PUT';
                }

                $http({
                    method: metodo,
                    url: urlBase + 'usuarios/',
                    data: self.usuario
                }).then(function successCallback(response) {
                    self.atualizarTabela();
                }, function errorCallback(response) {
                    self.ocorreuErro();
                });
            };

            self.alterar = function (usuario) {
                self.usuario = usuario;
            };

            self.deletar = function (usuario) {
                self.usuario = usuario;

                $http({
                    method: 'DELETE',
                    url: urlBase + 'usuarios/' + self.usuario.id + '/'
                }).then(function successCallback(response) {
                    self.atualizarTabela();
                }, function errorCallback(response) {
                    self.ocorreuErro();
                });
            };

            self.concluir = function (usuario) {
                self.usuario = usuario;

                $http({
                    method: 'PUT',
                    url: urlBase + 'usuarios/' + self.usuario.id + '/'
                }).then(function successCallback(response) {
                    self.atualizarTabela();
                }, function errorCallback(response) {
                    self.ocorreuErro();
                });
            };

            self.ocorreuErro = function () {
                alert("Ocorreu um erro inesperado!");
            };

            self.atualizarTabela = function () {
                $http({
                    method: 'GET',
                    url: urlBase + 'usuarios/'
                }).then(function successCallback(response) {
                    self.usuarios = response.data;
                    self.usuario = undefined;
                }, function errorCallback(response) {
                    self.ocorreuErro();
                });
            };

            self.activate = function () {
                self.atualizarTabela();
            };
            self.activate();
        });