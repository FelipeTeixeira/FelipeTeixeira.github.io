(function() {
    'use strict';

    angular.module('offy-app')
      .factory('GeoLocationService', GeoLocationService);

      GeoLocationService.$inject = ['$window', '$q'];

    function GeoLocationService($window, $q) {

        var currentPosition = null;

        var coordinates = function() {
            var deferred = $q.defer();
            var geolocation = $window.navigator.geolocation;

            if (currentPosition) {
                deferred.resolve(currentPosition);
            } else if (geolocation) {
                geolocation.getCurrentPosition(function(position) {
                    currentPosition = position.coords;
                    deferred.resolve(position.coords);
                });
            } else {
                deferred.reject();
            }

            return deferred.promise;
        };

        return {
            coordinates: coordinates
        }

    }
})();
