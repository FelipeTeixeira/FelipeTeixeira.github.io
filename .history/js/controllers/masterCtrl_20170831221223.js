(function() {
    'use strict';

    angular.module('offy-app')
      .controller('MasterController', MasterController);

    MasterController.$inject = ['$scope'];

    function MasterController($scope) {
        $scope.$location = $location;

        var init = function() {

        };

        init();
    }

})();
