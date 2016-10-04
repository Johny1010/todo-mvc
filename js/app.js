define([
    'angular',
    'lodash',
    'angular-storage'
], function (ng) {
    'use strict';

    var myApp = ng.module('app', []);

    myApp.controller('TodoCtrl', ['$scope', function ($scope) {

        $scope.todoList = [
            {
                'name': 'todo1',
                'description': 'todo1',
                'done': false
            },
            {
                'name': 'todo2',
                'description': 'todo2',
                'done': true
            },
            {
                'name': 'todo3',
                'description': 'todo3',
                'done': false
            },
            {
                'name': 'todo4',
                'description': 'todo4',
                'done': true
            },
            {
                'name': 'todo5',
                'description': 'todo5',
                'done': false
            }
        ];
    }]);

    return myApp;
});
