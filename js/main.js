require.config({
    paths: {
        'jquery': './lib/jquery/dist/jquery',
        'angular': './lib/angular/angular',
        'domReady': './lib/requirejs-domready/domReady',
        'materialize': './lib/Materialize/dist/js/materialize',
        'velocity': './lib/materialize/js/velocity.min',
        'hammerjs': './lib/materialize/js/hammer.min',
        'lodash': './lib/lodash/lodash',
        'angular-storage': './lib/angular-local-storage/dist/angular-local-storage'
    },

    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'materialize': {
            deps: ['jquery', 'hammerjs', 'velocity']
        },
        'angular-storage': {
            deps: ['angular']
        }

    },
    priority: [
        'jquery',
        'angular'
    ]
});