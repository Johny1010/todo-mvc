define([
  'angular',
  'lodash',
  'angular-material'
], function (ng, _) {
  'use strict';

  var myApp = ng.module('app', ['ngMaterial']);
  myApp.directive ('priceDirective', function(){
    return {
      restrict: 'A',
      templateUrl: '../templates/price.html',
      scope: {},
      controller: function($scope) {
        $scope.taxType = 'netto';
        $scope.price = undefined;
        $scope.calculate = function(taxType){
          if (taxType === 'netto') {
            $scope.result = $scope.price - ($scope.price * 0.23);
          } else {
            $scope.result = $scope.price * 1.23;
          }
        }
      }
    }

  });

  myApp.directive('taxesDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '../templates/taxes.html',
      scope: {},
      controller: function($scope) {
        $scope.cost = undefined;
        $scope.calc = function(){
          $scope.withVat = $scope.cost * (1 + $scope.taxi/100);
          $scope.vat = $scope.withVat - $scope.cost;
        }
      }
    }
  });

  myApp.directive('exciseDirective', function(){
    return {
      restrict: 'C',
      templateUrl: '../templates/excise.html',
      scope: {},
      controller: function($scope) {
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
      }
    }
  });

  myApp.directive('investmentDirective', function(){
    return {
      restrict: 'C',
      templateUrl: '../templates/investment.html',
      scope: {},
      controller: function($scope) {
        $scope.cost = undefined;
        $scope.procent = undefined;
        $scope.months = 'one';
        $scope.invest = function(){
          var initInterest = $scope.cost/100 * $scope.percentage;

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
      }
    }
  });

  return myApp;
});
