(function() {
    'use strict';

    angular.module('offy-app')
      .controller('LoginCreateAccountController', LoginCreateAccountController);

    LoginCreateAccountController.$inject = ['$scope', 'UserService', '$state'];

    function LoginCreateAccountController($scope, userService, $state) {
        var self = this;

        var init = function() {
            $scope.inputType = 'password';

            $scope.hideShowPassword = function() {
                var type = $scope.inputType  == 'password' ? "text" : "password";
                $scope.inputType = type;

                setTimeout(function () {
                    $("#login-password").focus();
                }, 10);
            };
        };

        self.submit = function() {
            if (!self.user) return;

            userService.create(self.user)
                .then(function(response) {
                    $state.go('home');
                })
                .catch(function(error) {
                    self.error = error;
                })

        }

        init();
    }
})();
