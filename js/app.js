define([
    'angular',
    'lodash',
    'angular-storage'
], function (ng) {
    'use strict';

    var myApp = ng.module('app', []);

    myApp.controller('TestCtrl', ['$scope', function($scope) {
        debugger;
    }]);

    return myApp;
});