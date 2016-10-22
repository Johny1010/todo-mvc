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

  myApp.controller('taxesController', function($scope){
    $scope.cost = 0;
    $scope.calc = function(taxi){
      if(taxi === '5') {
        $scope.withVat = $scope.cost * 1.05;
        $scope.vat = $scope.withVat-$scope.cost;
      } else if (taxi === '8'){
        $scope.withVat = $scope.cost * 1.08;
        $scope.vat = $scope.withVat-$scope.cost;
      } else if (taxi === '21'){
        $scope.withVat = $scope.cost * 1.21;
        $scope.vat = $scope.withVat-$scope.cost;
      } else if (taxi === '23'){
        $scope.withVat = $scope.cost * 1.23;
        $scope.vat = $scope.withVat-$scope.cost;
      }
    }
  });

  myApp.controller('excise', function($scope){
    $scope.engine = 0;
    $scope.cost = 0;
    $scope.calculateExcise = function(tax){
      if($scope.engine > 2000) {
        $scope.withExcise = $scope.cost * 1.186;
        $scope.withoutExcise = $scope.withExcise-$scope.cost;
      } else if($scope.engine < 2000){
        $scope.withExcise = $scope.cost * 1.031;
        $scope.withoutExcise = $scope.withExcise-$scope.cost;
      }
    }
  });

  myApp.controller('investment', function($scope){
    $scope.cost = 0;
    $scope.procent = 0;
    $scope.months = 'one';
    $scope.invest = function(tax){
      if ($scope.months === 'one'){
        $scope.amount = ($scope.cost + (($scope.cost/100 * $scope.procent)*0.08333));
        $scope.interest = ($scope.cost/100 * $scope.procent)*0.08333;
      } else if ($scope.months === 'three'){
        $scope.amount =($scope.cost + (($scope.cost/100 * $scope.procent)*0.25));
        $scope.interest = ($scope.cost/100 * $scope.procent)*0.25;
      } else if ($scope.months === 'six'){
        $scope.amount =($scope.cost + (($scope.cost/100 * $scope.procent)*0.5));
        $scope.interest = ($scope.cost/100 * $scope.procent)*0.5;
      } else if ($scope.months === 'twelve'){
        $scope.amount =$scope.cost + ($scope.cost/100 * $scope.procent);
        $scope.interest = ($scope.cost/100 * $scope.procent);
      }

    }
  });

  return myApp;
});
