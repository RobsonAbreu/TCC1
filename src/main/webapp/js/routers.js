    // configure our routes
    App.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                templateUrl : 'html/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'html/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'html/contact.html',
                controller  : 'contactController'
            })
            // route for the login page
            .when('/login', {
                templateUrl : 'html/login.html',
                controller  : 'loginController'
            })
            .when('/servico', {
                templateUrl : 'html/servico.html',
                controller  : 'servicoController'
            })
            .when('/sala', {
                templateUrl : 'html/sala.html',
                controller  : 'salaController'
            })
            .when('/banheiro', {
                templateUrl : 'html/banheiro.html',
                controller  : 'banheiroController'
            })
            .when('/quarto', {
                templateUrl : 'html/quarto.html',
                controller  : 'quartoController'
            })
            .when('/cozinha', {
                templateUrl : 'html/cozinha.html',
                controller  : 'cozinhaController'
            })
});

       