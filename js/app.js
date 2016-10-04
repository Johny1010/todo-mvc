//definiuje moduł, tutaj w nawiasach kwadratowych beda
define([
    'angular',
    'lodash',
    'angular-storage'
    //ng to 'angular' przekazany do funkcji
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', []);

 var myApp = angular.module('myApp' []);

 myApp.controller('TodoCtrl', ['$scope', function($scope){
   $scope.todoList = [
     {
      name:"todo1",
      description: "todo1",
      done: false
    },
     {
        name:"todo2",
        description: "todo2",
        done: true
      },
       {
          name:"todo3",
          description: "todo3",
          done: false
        },
        {
            name:"todo4",
            description: "todo4",
            done: true
          },
           {
              name:"todo5",
              description: "todo5",
              done: false
            }
   ];
 }])




    /*    myApp.config(function(localStorageServiceProvider){

     localStorageServiceProvider
     .setPrefix('todos');
     });*/


    //ng.module to to samo co angular.module; Tutaj w [] beda angularowe zależności
    return myApp;
});
