(function () {
    'use strict';

    angular.module('offy-app')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', '$q', '$window', 'config'];

    function LoginService($http, $q, $window, config) {

        var user = null;

        var authenticate = function (credentials) {

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: config.apiUrl + '/api/auth',
                data: credentials
            })
            .then(function (response) {
                user = response.data
                $window.sessionStorage.setItem("offy.user", JSON.stringify(user));
                $http.defaults.headers.common.Authorization = 'Bearer ' + user.token;
                deferred.resolve(user);
            })
            .catch(function (response) {
                deferred.reject(response.data);
            });

            return deferred.promise;
        };

        var isAuthenticated = function () {
            return user != null;
        };

        var setUser = function(newUser) {
            console.log('set user', newUser);
            if (newUser) {
                console.log('set user', newUser);
                user = newUser;
            }
        }

        var logout = function (callback) {
            $window.sessionStorage.removeItem("offy.user");
            user = null;
            if (callback) callback();
        }

        var init = function () {
            var strUser = $window.sessionStorage.getItem("offy.user");
            if (strUser) {
                user = JSON.parse(strUser);
            }
        }

        init();

        return {
            authenticate: authenticate,
            currentUser: function () { return user; },
            setUser: setUser,
            isAuthenticated: isAuthenticated,
            logout: logout
        };
    }
})();
