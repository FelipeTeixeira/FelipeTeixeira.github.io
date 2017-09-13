(function() {
    'use strict';

    angular.module('offy-app')
      .factory('OfferService', OfferService);

    OfferService.$inject = ['$http'];

    function OfferService($http) {

        var near = function(location) {
          return $http({
            method: 'POST',
            url: 'http://localhost:3003/api/promos/near',
            data: location
          });
        };

        return {
          near: near
        };
    }
})();
