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

  myApp.controller('Podatki', function($scope){
    $scope.cost = 0;
    $scope.calc = function(taxi){
      if(taxi === '5') {
        $scope.resultat = $scope.cost * 1.05;
        $scope.wynik = $scope.resultat-$scope.cost;
      } else if (taxi === '8'){
        $scope.resultat = $scope.cost * 1.08;
        $scope.wynik = $scope.resultat-$scope.cost;
      } else if (taxi === '21'){
        $scope.resultat = $scope.cost * 1.21;
        $scope.wynik = $scope.resultat-$scope.cost;
      } else if (taxi === '23'){
        $scope.resultat = $scope.cost * 1.23;
        $scope.wynik = $scope.resultat-$scope.cost;
      }
    }
  });





  return myApp;
});
