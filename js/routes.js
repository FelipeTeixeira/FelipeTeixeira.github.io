(function() {
    'use strict';

angular.module('offy-app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise("/login");

            $stateProvider
            .state('master', {
                controller: 'MasterController',
            })

            .state('login', {
                url: "/login",
                templateUrl: 'views/login.html',
            })

            .state('loginEmail', {
                url: "/entrar-email",
                templateUrl: 'views/loginEmail.html',
                controller: 'LoginEmailController',
                controllerAs: 'loginEmailCtrl',
                parent: 'master'
            })

            .state('loginCreateAccount', {
                url: "/criar-conta",
                templateUrl: 'views/loginCreateAccount.html',
                controller: 'LoginCreateAccountController',
                parent: 'master'
            })

            .state('home', {
                url: "/",
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl',
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

            .state('alerts', {
                url: "/alerts",
                templateUrl: 'views/alerts.html',
                controller: 'AlertsController',
                parent: 'master'
            })

            .state('favorites', {
                url: "/favorites",
                templateUrl: 'views/favorites.html',
                controller: 'FavoritesController',
                parent: 'master'
            })

            .state('publish', {
                url: "/publish",
                templateUrl: 'views/publish.html',
                controller: 'PublishController',
                parent: 'master'
            })

            .state('profile', {
                url: "/profile",
                templateUrl: 'views/profile.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl',
                parent: 'master'
            });

            // $locationProvider.html5Mode(true);
        }
    ]);
})();
