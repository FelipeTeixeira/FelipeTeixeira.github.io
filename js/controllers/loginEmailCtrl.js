(function () {
    'use strict';

    angular.module('offy-app')
        .controller('LoginEmailController', LoginEmailController);

    LoginEmailController.$inject = ['$scope', 'LoginService', '$state'];

    function LoginEmailController($scope, loginService, $state) {
        var self = this;
        self.credentials = {};
        var init = function () {
            $scope.inputType = 'password';

            $scope.hideShowPassword = function () {
                var type = $scope.inputType == 'password' ? "text" : "password";
                $scope.inputType = type;

                setTimeout(function () {
                    $("#login-password").focus();
                }, 10);
            };
        };

        self.authenticate = function () {
            loginService.authenticate(self.credentials)
                .then(function (user) {
                    $state.go('home');
                })
                .catch(function (error) {
                    self.error = error;
                });

        }

        init();
    }
})();
