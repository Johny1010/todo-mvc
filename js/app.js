define([
    'angular',
    'lodash',
    'angular-material'
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', ['ngMaterial']);
    myApp.controller('PriceCtrl', function($scope){
      $scope.price = false;
      $scope.price = 0;
      $scope.vat = $scope.price * 0.23;
      $scope.add = function(){
      $scope.result = $scope.price + $scope.vat;
      $scope.brutto = $scope.result + ($scope.price*0.23);
      }
});







    return myApp;
});
