(function() {
    'use strict';

angular.module('offy-app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
            .state('master', {
                controller: 'MasterController',
            })
            .state('home', {
                url: "/",
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                parent: 'master'
            })
            .state('offer', {
                url: "/offer",
                templateUrl: 'views/offer.html',
                controller: 'OfferController',
                parent: 'master'
            })
            .state('comments', {
                url: "/comments",
                templateUrl: 'views/comments.html',
                controller: 'CommentsController',
                parent: 'master'
            })
            .state('login', {
                url: "/login",
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                parent: 'master'
            });

            // $locationProvider.html5Mode(true);
        }
    ]);
})();
