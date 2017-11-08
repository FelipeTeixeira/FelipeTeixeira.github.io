
(function () {
    'use strict';

    angular.module('offy-app')
        .controller('PublishStepOneController', PublishStepOneController);

    PublishStepOneController.$inject = ['$scope', 'PublishService', '$timeout', '$state'];

    function PublishStepOneController($scope, publishService, $timeout, $state) {

        var self = this;

        var init = function () {
            var inputFile = $('#offer-image-file');

            inputFile.change(function () {
                $scope.$apply(function () {
                    self.hasImage = true;

                    // $timeout(function() {
                    //     $('#offer-image').rcrop({
                    //         minSize : [200,200],
                    //         preserveAspectRatio : true
                    //     });
                    // }, 500);

                });

                readURL(this);
            });
        };



        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                publishService.image(input.files[0]);

                reader.onload = function (e) {
                    // $('#offer-image').attr('src', e.target.result);
                    $('.imgCropper-image').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        self.crop = function() {
            console.log(self.cropImage);
            var result = self.cropImage.crop();
            console.log(result);
            publishService.image(result);
            $state.go('publishTwoStep');
        };

        self.updateResultImage = function(base64) {
            self.resultImage = base64;
            //$scope.$apply(); // Apply the changes.
        };


        // Cropper API available when image is ready.
        self.cropperApi = function(cropperApi) {
            console.log('cropper api is ready');
            //cropperApi.zoom(3);
            //ropperApi.rotate(270);
            //cropperApi.fit();
            self.cropImage = cropperApi;
            self.resultImage = cropperApi.crop();
            //$('#cropped-image').attr('src', self.resultImage);
            //$scope.$apply(); // Apply the changes.
        };

        init();
    }
})();
