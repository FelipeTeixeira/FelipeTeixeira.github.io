(function () {
    'use strict';

    angular.module('offy-app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'OfferService', 'GeoLocationService'];

    function HomeController($scope, offerService, geoLocationService) {
        var self = this;
        self.getLocationAvaialable = false;
        var init = function () {
            //self.offers = [];
            geoLocationService.coordinates()
                .then(function(coordinates) {
                   getOfferNear(coordinates);
                   self.getLocationAvaialable = true;
                })
                .catch(function() {

                });
        };

        var getOfferNear = function(coordinates) {
            self.location = {
                "latitude": coordinates.latitude,
                "longitude": coordinates.longitude,
                "distance": 50
            };

            self.maxCurrentDistance = 0;

            offerService.near(self.location).then(function(response) {
                self.offers = response.data;

                if (response.data.length == 0) {
                    return;
                }

                self.lastOffer = response.data[response.data.length - 1];
                self.maxCurrentDistance = Math.round(getDistanceFromLatLonInKm(self.location.latitude,
                    self.location.longitude, self.lastOffer.location[1], self.lastOffer.location[0]));
                console.log('distance', self.maxCurrentDistance, self.lastOffer.location, self.location);
            });
        };

        var getOffers = function() {
            offerService.offers().then(function(response) {
                self.offers = response.data;
            });
        };

        var deg2rad = function (deg) {
            return deg * (Math.PI / 180)
        }

        var getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2 - lat1);  // deg2rad below
            var dLon = deg2rad(lon2 - lon1);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d;
        };

        init();
    }
})();
