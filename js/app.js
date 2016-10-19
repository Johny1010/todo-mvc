define([
    'angular',
    'lodash',
    'angular-material'
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', ['ngMaterial']);
    myApp.controller('PriceCtrl', function($scope){

      $scope.taxType = 'netto';
      $scope.price = 0;
      $scope.calculate = function(taxType){
        if(taxType === 'netto') {
          $scope.result = $scope.price - ($scope.price * 0.23);
        } else if(taxType === 'brutto') {
          $scope.result = $scope.price * 1.23;
        }
      }

  });







    return myApp;
});
