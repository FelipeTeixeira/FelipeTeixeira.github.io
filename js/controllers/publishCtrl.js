(function () {
    'use strict';

    angular.module('offy-app')
        .controller('PublishController', PublishController);

    PublishController.$inject = ['$scope', '$timeout', 'PublishService', '$state'];

    function PublishController($scope, $timeout, publishService, $state) {

        var self = this;

        var init = function () {
            window.scrollTo(0,0);
            console.log(publishService.offer());
            self.image = publishService.offer().image;

            var reader = new FileReader();
            reader.readAsDataURL(self.image);

            reader.onload = function (e) {
                $('.publish-imgOptions-image').attr('src', e.target.result);
            }


        };

        var initMap = function () {
            var input = document.getElementById('pac-input');
            if (!input) return;
            var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                $scope.$apply(function () {
                    self.place = place;
                    self.placeData = {
                        id: place.id,
                        address: place.formatted_address,
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                        name: place.name,
                        url: place.url
                    };
                    input.value = '';
                });
            });
        };

        $timeout(function () {
            initMap();
        }, 300);

        self.submit = function() {
            publishService.productName(self.productName);
            publishService.description(self.description);
            publishService.price(self.price);
            publishService.place(self.placeData);
            return $state.go('publishFourStep');

            publishService.post().then(function(response) {
                console.log('success');
                $state.go('publishFourStep');
            }).catch(function(response) {
                console.log('error');
            });
        };

        init();
    }
})();
