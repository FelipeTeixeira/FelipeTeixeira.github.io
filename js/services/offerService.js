(function () {
    'use strict';

    angular.module('offy-app')
        .factory('OfferService', OfferService);

    OfferService.$inject = ['$http', 'config'];

    function OfferService($http, config) {

        var near = function (location) {
            return $http({
                method: 'POST',
                url: config.apiUrl + "/api/promos/near",
                data: location
            });
        };

        var offers = function () {
            return $http({
                method: 'GET',
                url: baseUrl + "api/promos/"
            });
        }

        return {
            near: near,
            offers: offers
        };
    }
})();
