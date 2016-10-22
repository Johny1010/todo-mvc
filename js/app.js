define([
  'angular',
  'lodash',
  'angular-material'
], function (ng, _) {
  'use strict';

  var myApp = ng.module('app', ['ngMaterial']);
  myApp.controller('PriceCtrl', function($scope){

    $scope.taxType = 'netto';
    $scope.price = undefined;
    $scope.calculate = function(taxType){
      if (taxType === 'netto') {
        $scope.result = $scope.price - ($scope.price * 0.23);
      } else {
        $scope.result = $scope.price * 1.23;
      }
    }

  });

  myApp.controller('TaxesCtrl', function($scope){
    $scope.cost = undefined;
    $scope.calc = function(taxi){
      if (taxi === '5') {
        $scope.withVat = $scope.cost * 1.05;
      } else if (taxi === '8') {
        $scope.withVat = $scope.cost * 1.08;
      } else if (taxi === '21') {
        $scope.withVat = $scope.cost * 1.21;
      } else {
        $scope.withVat = $scope.cost * 1.23;
      }

      $scope.vat = $scope.withVat - $scope.cost;
    }
  });

  myApp.controller('ExciseCtrl', function($scope){
    $scope.engine = undefined;
    $scope.cost = undefined;
    $scope.calculateExcise = function(){
      if($scope.engine > 2000) {
        $scope.withExcise = $scope.cost * 1.186;
      } else {
        $scope.withExcise = $scope.cost * 1.031;
      }

      $scope.withoutExcise = $scope.withExcise - $scope.cost;
    }
  });

  myApp.controller('InvestmentCtrl', function($scope){
    $scope.cost = undefined;
    $scope.procent = undefined;
    $scope.months = 'one';
    $scope.invest = function(){
      var initInterest = $scope.cost/100 * $scope.procent;

      if ($scope.months === 'one'){
        $scope.amount = ($scope.cost + (initInterest * 0.08333));
        $scope.interest = initInterest * 0.08333;
      } else if ($scope.months === 'three'){
        $scope.amount = ($scope.cost + (initInterest * 0.25));
        $scope.interest = initInterest * 0.25;
      } else if ($scope.months === 'six'){
        $scope.amount = ($scope.cost + (initInterest * 0.5));
        $scope.interest = initInterest * 0.5;
      } else {
        $scope.amount = $scope.cost + initInterest;
        $scope.interest = initInterest;
      }
    }
  });

  return myApp;
});
