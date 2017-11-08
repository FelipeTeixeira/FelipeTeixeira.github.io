(function () {
    'use strict';

    angular.module('offy-app')
        .factory('PublishService', PublishService);

    PublishService.$inject = ['$window', '$http', 'config'];

    function PublishService($window, $http, config) {

        var offerData = {};

        var files = ['image', 'category', 'description', 'productName', 'price', 'place'];

        var factory = {};
        files.forEach(function(prop) {
            factory[prop] = function(param) {
                offerData[prop] = param;
            }
        });

        var offer = function() {
            return offerData;
        };

        var post  = function() {
            var payload = new FormData();
            //payload.append('file', offerData['image']);

            files.forEach(function(prop) {
                //if (prop !== 'image') {
                    var data = prop === 'place' ? JSON.stringify(offerData[prop]) : offerData[prop];
                    payload.append(prop, data);
                //}
            });
            return $http.post(config.apiUrl + '/api/promos/', payload, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined},
                data: offerData
            });
        };

        factory.offer = offer;
        factory.post = post;

        return factory;

    }
})();
