define([
    'angular',
    'lodash',
    'angular-storage'
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', []);

    myApp.controller('TodoCtrl', ['$scope', function ($scope) {
      $scope.todo = '';
        $scope.todoList = [
            {
                'id': 1,
                'name': 'todo1',
                'description': 'todo1',
                'done': false
            },
            {
                'id': 2,
                'name': 'todo2',
                'description': 'todo2',
                'done': true
            },
            {
                'id': 3,
                'name': 'todo3',
                'description': 'todo3',
                'done': false
            },
            {
                'id': 4,
                'name': 'todo4',
                'description': 'todo4',
                'done': true
            },
            {
                'id': 5,
                'name': 'todo5',
                'description': 'todo5',
                'done': false
            }
        ];
        $scope.addToList = function(todo) {
          if (!todo) {
            return;
          }
          $scope.todoList.push({
              'id': Math.floor((Math.random()*6)+1),
              'name': todo,
              'description': '',
              'done': false
          });
          $scope.todo = '';
        };
        $scope.deleteTodo = function(todoId) {
          var index = _.findIndex($scope.todoList, {'id': todoId});
          if (index > -1) {
          $scope.todoList.splice(index, 1);
        }
        }
    }]);

    return myApp;
});
