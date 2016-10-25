define([
    'angular',
    'lodash',
    'angular-material'
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', ['ngMaterial']);

    myApp.controller('CalculatorCtrl', function($scope) {
      //'/^\d{7}\-\+\/\*\d{7}$/'
      // Variables
      $scope.result = 0;
      $scope.value = undefined;

      // Functions
      $scope.calculate = function() {
      };

      $scope.checkInput = function() {
        $scope.value = $scope.value.replace(/(^[a-z ]+$)/, '');
      };

      $scope.onlyNumbers = /^\d+$/;
      $scope.clear = function() {
        $scope.result = 0;
      };
    });

    return myApp;
});
