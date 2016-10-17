define([
    'angular',
    'lodash',
    'angular-material'
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', ['ngMaterial']);
    
    myApp.controller('calculatorController', function($scope){
      $scope.result = 0;
      $scope.add = function(){
        $scope.result = $scope.a + $scope.b;
      }
      $scope.sub = function(){
        $scope.result = $scope.a - $scope.b;
      }
      $scope.mul = function(){
        $scope.result = $scope.a * $scope.b;
      }
      $scope.div = function(){
        $scope.result = $scope.a / $scope.b;
      }
      $scope.sqr = function(){
        $scope.result = Math.sqrt($scope.a);
      }
      $scope.powe = function(){
        $scope.result = Math.pow($scope.a, $scope.b);
      }
    });

    return myApp;
});
