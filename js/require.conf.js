requirejs.config({
    paths: {
        'jquery': 'js/lib/jquery/dist/jquery.min',
        'angular': 'js/lib/angular/angular',
        'domReady': 'js/lib/requirejs-domready/domReady',
        'materialize': 'js/lib/Materialize/dist/js/materialize',
        'velocity': 'js/lib/materialize/js/velocity.min',
        'hammerjs': 'js/lib/materialize/js/hammer.min',
        'lodash': 'js/lib/lodash/lodash',
        'angular-storage': 'js/lib/angular-local-storage/dist/angular-local-storage'
    },
    shim: {
        'angular': {
            deps: ['jquery'], exports: 'angular'
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