(function() {
  'use strict';
  angular.module('offy-app', ['ui.router'])

  // REMOVE NG-SCOPE
  .config(['$compileProvider', function ($compileProvider) {
      $compileProvider.debugInfoEnabled(false);
  }])

  .run(function($transitions, $state, $location, $window, $http) {
    // if user is not authenticated take him to login page
    $transitions.onStart({to: ['profile', 'favorites', 'publish', 'alerts']}, function(trans) {
        var loginService = trans.injector().get('LoginService');
        if (!loginService.isAuthenticated()) {
            return trans.router.stateService.target('login');
        }
    });
    // if user is authenticated take him to home page
    $transitions.onStart({to: ['login', 'loginEmail', 'loginCreateAccount']}, function(trans) {
        var loginService = trans.injector().get('LoginService');
        if (loginService.isAuthenticated()) {
            return trans.router.stateService.target('home');
        }
    });

    $transitions.onStart({to: ['home']}, function(trans) {
        var params = $location.search();
        if (params.token) {
            var userService = trans.injector().get('UserService');
            var loginService = trans.injector().get('LoginService');
            $http.defaults.headers.common.Authorization = 'Bearer ' + params.token;
            userService.me(params.token).then(function(response) {
                var user = response.data;
                loginService.setUser(user);
                $window.sessionStorage.setItem("offy.user", JSON.stringify(user));
                return trans.router.stateService.target('home');
            });
        }
    });
  });
})();
