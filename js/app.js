(function() {
  'use strict';
  angular.module('offy-app', ['ui.router'])

  // REMOVE NG-SCOPE
  .config(['$compileProvider', function ($compileProvider) {
      $compileProvider.debugInfoEnabled(false);
  }])
})();
