define([
    'angular',
    'lodash',
    'angular-material'
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', ['ngMaterial']);

    myApp.controller('TodoCtrl', ['$scope', function ($scope) {

        // Variables
        $scope.todo = '';
        $scope.priority = undefined;
        $scope.priorities = [
          {'id': 1, 'name': '1'},
          {'id': 2, 'name': '2'},
          {'id': 3, 'name': '3'}
        ]

        // Functions
        init();

        // Methods
        function init() {
            if (localStorage.getItem('todoList')) {
                $scope.todoList = JSON.parse(localStorage.getItem('todoList'));
            } else {
                $scope.todoList = [];
            }
        }

        $scope.addToList = function (todoName, priority) {
            if (!todoName) {
                return;
            }
            $scope.todoList.push({
                'id': Math.floor((Math.random() * 10000) + 1),
                'name': todoName,
                'priority': priority,
                'done': false
            });
            $scope.todo = '';
            localStorage.setItem('todoList', JSON.stringify($scope.todoList));

        };

        $scope.deleteTodo = function (todoId) {
            var index = _.findIndex($scope.todoList, {'id': todoId});
            if (index > -1) {
                $scope.todoList.splice(index, 1);
            }
            localStorage.setItem('todoList', JSON.stringify($scope.todoList));
        };
    }]);

    return myApp;
});
