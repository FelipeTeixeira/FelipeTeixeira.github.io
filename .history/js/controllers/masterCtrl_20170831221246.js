(function() {
    'use strict';

    angular.module('offy-app')
      .controller('MasterController', MasterController);

    MasterController.$inject = ['$scope', '$location'];

    function MasterController($scope, $location) {
        $scope.$location = $location;

        var init = function() {

        };

        init();
    }

})();
