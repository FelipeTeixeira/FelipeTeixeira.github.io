(function() {
    'use strict';

    angular.module('offy-app')
      .controller('MasterController', MasterController);

    MasterController.$inject = ['$scope', '$location', '$rootScope'];

    function MasterController($scope, $location, $rootScope) {
        $scope.$location = $location;

        var init = function() {

        };

        init();

    //     $rootScope.$on('$stateChangeSuccess',
    //     function(event, toState, toParams, fromState, fromParams) {
    //       $state.current = toState;
    //     }
    //   )

    $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
        $rootScope.$previousState = from;
    });

    }

})();

