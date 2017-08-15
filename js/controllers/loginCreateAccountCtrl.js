(function() {
    'use strict';

    angular.module('offy-app')
      .controller('LoginCreateAccountController', LoginCreateAccountController);

    LoginCreateAccountController.$inject = ['$scope'];

    function LoginCreateAccountController($scope) {

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

        init();
    }
})();
