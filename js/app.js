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
        $scope.result = $scope.cost * 1.05;
        $scope.result2 = $scope.result-$scope.cost;
      } else if (taxi === '8'){
        $scope.result = $scope.cost * 1.08;
        $scope.result2 = $scope.result-$scope.cost;
      } else if (taxi === '21'){
        $scope.result = $scope.cost * 1.21;
        $scope.result2 = $scope.result-$scope.cost;
      } else if (taxi === '23'){
        $scope.result = $scope.cost * 1.23;
        $scope.result2 = $scope.result-$scope.cost;
      }
    }
  });

  myApp.controller('excise', function($scope){
    $scope.engine = 0;
    $scope.cost = 0;
    $scope.exc = function(tax){
      if( $scope.engine>2000 ) {
        $scope.result = $scope.cost * 1.186;
        $scope.result2 =$scope.result-$scope.cost;
      } else if($scope.engine<2000){
        $scope.result = $scope.cost * 1.031;
        $scope.result2 =$scope.result-$scope.cost;
      }
    }
  });


  return myApp;
});
