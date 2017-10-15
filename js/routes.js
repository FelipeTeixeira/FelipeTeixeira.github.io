(function() {
    'use strict';

angular.module('offy-app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("/");

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
                controllerAs: 'createAccountCtrl',
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
                url: "/alertas",
                templateUrl: 'views/alerts.html',
                controller: 'AlertsController',
                parent: 'master'
            })

            .state('favorites', {
                url: "/favoritos",
                templateUrl: 'views/favorites.html',
                controller: 'FavoritesController',
                parent: 'master'
            })

            // PUBLISH
            // 1 STEP
            .state('publishOneStep', {
                url: "/publicar/etapa-1",
                templateUrl: 'views/partials/publish/1-step-photo.html',
                controller: 'PublishStepOneController',
                controllerAs: 'step1Ctrl',
                parent: 'master'
            })

            // 2 STEP
            .state('publishTwoStep', {
                url: "/publicar/etapa-2",
                templateUrl: 'views/partials/publish/2-step-category.html',
                controller: 'PublishController',
                parent: 'master'
            })

            // 3 STEP
            .state('publishThreeStep', {
                url: "/publicar/etapa-3",
                templateUrl: 'views/partials/publish/3-step-info.html',
                controller: 'PublishController',
                controllerAs: 'step3Ctrl',
                parent: 'master'
            })

             // 4 STEP SUCESS
             .state('publishFourStep', {
                url: "/publicar/etapa-sucesso",
                templateUrl: 'views/partials/publish/4-step-success.html',
                parent: 'master'
            })
            //! PUBLISH

            .state('profile', {
                url: "/perfil",
                templateUrl: 'views/profile.html',
                controller: 'ProfileController',
                controllerAs: 'profileCtrl',
                parent: 'master'
            });


        }
    ]);
})();
