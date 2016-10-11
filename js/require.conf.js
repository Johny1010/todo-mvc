requirejs.config({
    paths: {
        'jquery': 'js/lib/jquery/dist/jquery',
        'angular': 'js/lib/angular/angular',
        'angular-aria': 'js/lib/angular-aria/angular-aria',
        'angular-animate': 'js/lib/angular-animate/angular-animate',
        'angular-material': 'js/lib/angular-material/angular-material',
        'domReady': 'js/lib/requirejs-domready/domReady',
        'lodash': 'js/lib/lodash/lodash'
    },
    shim: {
        'angular': {
            deps: ['jquery'], exports: 'angular'
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular-aria', 'angular-animate']
        }
    },
    priority: [
        'jquery',
        'angular'
    ]
});