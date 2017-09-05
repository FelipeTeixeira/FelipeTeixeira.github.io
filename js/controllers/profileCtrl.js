(function() {
    'use strict';

    angular.module('offy-app')
      .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', 'LoginService', '$state'];

    function ProfileController($scope, loginService, $state) {
        var self = this;
        var init = function() {

        };

        self.logout = function() {
            loginService.logout(function() {
                $state.go('login')
            });
        }

        init();
    }
})();
