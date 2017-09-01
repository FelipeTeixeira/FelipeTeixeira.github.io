(function() {
    'use strict';

    angular.module('offy-app')
      .factory('OfferService', OfferService);

    OfferService.$inject = ['$http'];

    function OfferService($http) {

        var near = function(location) {
          return $http({
            method: 'POST',
            url: 'https://promocial.herokuapp.com/api/promos/near',
            data: location
          });
        };

        return {
          near: near
        };
    }
})();
