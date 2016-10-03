require.config({
    //aliasy (skroty) do ścieżek bibliotek z bowera
    paths: {
        'domReady': './lib/requirejs-domready/domReady',
        'angular': './lib/angular/angular.min',
        'jquery': './lib/jquery/dist/jquery.min',
        'materialize': './lib/Materialize/dist/js/materialize.min',
        'velocity': './lib/materialize/js/velocity.min',
        'hammerjs': 'lib/materialize/js/hammer.min',
        'lodash': 'lib/lodash/lodash.min',
        'angular-storage': 'lib/angular-local-storage/dist/angular-local-storage.min'
    },

    //angular nie ogarnia jako tako modułów ładowanych asynchronicznych, wiec trzeba skorzystać z paremetru shim
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

    deps: ['./bootstrap']
});