var alexalvApp = angular.module('alexalvApp', ['ngRoute']);

alexalvApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page (cv)
        .when('/', {
            templateUrl : 'pages/cv.html',
            controller  : 'mainController'
        })

        // route for the blog
        .when('/blog', {
            templateUrl : 'pages/blog.html',
            controller  : 'blogController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

alexalvApp.controller('mainController', function($scope) {
    $scope.message = 'Hello! It\'s alexalv on github!';
});

alexalvApp.controller('blogController', function($scope) {
    $scope.message = 'Here will be blog.';
});

alexalvApp.controller('contactController', function($scope) {
    $scope.message = 'Here will be some contact info, I guess';
});