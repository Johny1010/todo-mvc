define([
    'angular',
    'lodash',
    'angular-storage'
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', []);

    myApp.controller('TodoCtrl', ['$scope', function ($scope) {
      $scope.todo = '';

        init();
        function init() {
          if (localStorage.getItem('todoList')) {
            $scope.todoList = JSON.parse(localStorage.getItem('todoList'));
          } else {
            $scope.todoList = [];
          }
        }

        $scope.addToList = function(todo, priority) {
          if (!todo) {
            return;
          }
          $scope.todoList.push({
              'id': Math.floor((Math.random()*10000)+1),
              'name': todo,
              'priority': priority,
              'done': false
          });
          $scope.todo = '';
          localStorage.setItem('todoList', JSON.stringify($scope.todoList));

        };

        $scope.deleteTodo = function(todoId) {
          var index = _.findIndex($scope.todoList, {'id': todoId});
          if (index > -1) {
          $scope.todoList.splice(index, 1);
        }
        localStorage.setItem('todoList', JSON.stringify($scope.todoList));
      };
    }]);

    return myApp;
});
