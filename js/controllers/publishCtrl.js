(function () {
    'use strict';

    angular.module('offy-app')
        .controller('PublishController', PublishController);

    PublishController.$inject = ['$scope', '$timeout'];

    function PublishController($scope, $timeout) {

        var self = this;

        var init = function () {
        };

        var initMap = function () {
            var input = document.getElementById('pac-input');
            if (!input) return;
            var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                $scope.$apply(function () {
                    self.place = place;
                    console.log(place.geometry.location);
                    input.value = '';
                });
            });
        };

        $timeout(function () {
            initMap();
        }, 300);

        init();
    }
})();
