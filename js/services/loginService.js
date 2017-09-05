(function() {
    'use strict';

    angular.module('offy-app')
      .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', '$q', '$window'];

    function LoginService($http, $q, $window) {

        var user = null;

        var authenticate = function(credentials) {

          var deferred = $q.defer();

          $http({
            method: 'POST',
            url: 'https://promocial.herokuapp.com/api/auth',
            data: credentials
          })
          .then(function(response) {
            user = response.data
            $window.sessionStorage.setItem("offy.user", JSON.stringify(user));
            deferred.resolve(user);
          })
          .catch(function(response) {
            deferred.reject(response.data);
          });

          return deferred.promise;
        };

        var isAuthenticated = function() {
          return user != null;
        };

        var logout = function(callback) {
            $window.sessionStorage.removeItem("offy.user");
            user = null;
            if (callback) callback();
        }

        var init = function() {
            var strUser = $window.sessionStorage.getItem("offy.user");
            if (strUser) {
                user = JSON.parse(strUser);
            }
        }

        init();

        return {
          authenticate: authenticate,
          currentUser: user,
          isAuthenticated: isAuthenticated,
          logout: logout
        };
    }
})();
