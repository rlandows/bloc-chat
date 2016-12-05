var app = angular.module('blocChat', ['ui.router', 'firebase'])

app.config(function($stateProvider, $locationProvider) {
    $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
    
    $stateProvider 
            .state('index', {
            url: '/',
            templateUrl: 'index.html'
        })
    }
    
    
})





