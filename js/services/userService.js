(function () {
    'use strict';

    angular.module('offy-app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http', '$q', '$window', 'LoginService'];

    function UserService($http, $q, $window, loginService) {

        var me = function(token) {
            return $http({
                method: 'GET',
                url: 'https://promocial.herokuapp.com/api/users/me'
            });
        };

        var create = function (user) {

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: 'https://promocial.herokuapp.com/api/users',
                data: user
            })
            .then(function (response) {
                user = response.data
                loginService.setUser(user);
                $window.sessionStorage.setItem("offy.user", JSON.stringify(user));
                deferred.resolve(user);
            })
            .catch(function (response) {
                deferred.reject(response.data);
            });

            return deferred.promise;
        };

        return {
            create: create,
            me: me
        };
    }
})();
