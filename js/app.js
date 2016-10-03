//definiuje moduł, tutaj w nawiasach kwadratowych beda
define([
    'angular',
    'lodash',
    'angular-storage'
    //ng to 'angular' przekazany do funkcji
], function (ng, _) {
    'use strict';

    var myApp = ng.module('app', []);

    /*    myApp.config(function(localStorageServiceProvider){

     localStorageServiceProvider
     .setPrefix('todos');
     });*/


    //ng.module to to samo co angular.module; Tutaj w [] beda angularowe zależności
    return myApp;
});