(function() {
    'use strict';

    angular.module('offy-app')
      .factory('GeoLocationService', GeoLocationService);

      GeoLocationService.$inject = ['$window', '$q'];

    function GeoLocationService($window, $q) {

        var coordinates = function() {
            var deferred = $q.defer();
            var geolocation = $window.navigator.geolocation;

            if (geolocation) {
                geolocation.getCurrentPosition(function(position) {
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
