(function() {
    'use strict';

    angular.module('offy-app')
      .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', 'LoginService', '$state'];

    function ProfileController($scope, loginService, $state) {
        var self = this;

        var init = function() {
            console.log('current user', loginService.currentUser);
            self.user = loginService.currentUser();
        };

        self.logout = function() {
            loginService.logout(function() {
                $state.go('login')
            });
        }

        init();
    }
})();
