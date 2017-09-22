(function () {
    'use strict';

    angular.module('offy-app')
        .controller('PublishStepOneController', PublishStepOneController);

    PublishStepOneController.$inject = ['$scope'];

    function PublishStepOneController($scope) {

        var self = this;

        var init = function () {

            var inputFile = $('#offer-image-file');

            inputFile.change(function () {
                $scope.$apply(function () {
                    self.hasImage = true;
                });
                readURL(this);
            });
        };

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#offer-image').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }


        init();
    }
})();
