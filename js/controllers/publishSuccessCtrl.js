(function () {
    'use strict';

    angular.module('offy-app')
        .controller('PublishSuccessController', PublishSuccessController);

    PublishSuccessController.$inject = ['$scope', 'PublishService', '$state'];

    function PublishSuccessController($scope, publishService, $state) {

        var self = this;

        var init = function() {
            self.offerData = publishService.offer();
            console.log(self.offerData);

            //var reader = new FileReader();
            //reader.readAsDataURL(self.offerData.image);

            //reader.onload = function (e) {
                $('.stepSuccess-product-imgProduct').attr('src', self.offerData.image);
        };

        init();
    }
})();
