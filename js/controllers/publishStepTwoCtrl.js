(function () {
    'use strict';

    angular.module('offy-app')
        .controller('PublishStepTwoController', PublishStepTwoController);

    PublishStepTwoController.$inject = ['$scope', 'PublishService', '$state'];

    function PublishStepTwoController($scope, publishService, $state) {

        var self = this;

        self.next = function() {
            if (self.category) {
                publishService.category(self.category);
                $state.go('publishThreeStep');
            }
        };

    }
})();
