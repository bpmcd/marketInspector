require.config({
    baseUrl: '/assets/scripts',
    paths: {
        'requirejs': '../vendor/requirejs/require',
        'jquery': '../vendor/jquery/dist/jquery',
        'angular': '../vendor/angular/angular',
        'text': '../vendor/requirejs-text/text'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    },
    deps: [
        './bootstrap'
    ]
});
