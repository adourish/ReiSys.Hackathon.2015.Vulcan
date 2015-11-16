// Vulcan Angular Application
var app = angular.module('Vulcan', ['ui.router', 'ui.bootstrap']);

// Setup UI Routing
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    // Home Page
        .state('home', {
            url: '/home',
            templateUrl: 'Home.html'
        })
    // Past Page
        .state('past', {
            url: '/past',
            templateUrl: 'Past.html',
            controller: function ($scope) {
                angular.element(document).ready(function () {
                    disasterStateController.start();
                });
            }
        })
    // Future Page
        .state('future', {
            url: '/future',
            templateUrl: 'DisasterPrediction.html'
        })

    // About Page
        .state('about', {
            url: '/about',
            templateUrl: 'About.html'
        })

    // API Reference Page
        .state('api', {
            url: '/api',
            templateUrl: 'api.html'
        })

        .state('code', {
            url: '/code',
            templateUrl: 'environment.html'
        })

        .state('machinelearning', {
            url: '/machinelearning',
            templateUrl: 'machinelearning.html'
        });

   
});


//Main Controller
app.controller('MainController', function ($scope) {

});
