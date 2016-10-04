require([
    'js/require.conf'
], function () {
    'use strict';

    require([
        'js/app'
    ], function () {
        angular
            .element(document)
            .ready(function () {
                angular.bootstrap(angular.element('html').addClass('ng-app'), ['app']);
            });
    });
});
