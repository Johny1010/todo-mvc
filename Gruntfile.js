'use strict';

module.exports = function(grunt){
// Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

// Configurable paths
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var config = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        config: config,

        // watch any js files on change
        watch: {
            options: { livereload: true },
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            scripts: {
                files: ['<%= config.app %>/js/src/*.js'],
                tasks: ['uglify']
            },
            // sass
            sass: {
                files: ['<%= config.app %>/sass/**/*.scss'],
                tasks: ['compass:dev']
            },
            // watch html
            html: {
                files: ['<%= config.app %>/**/*.html']
            }
        },

        // Grunt server settings
        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect(serveStatic('www-root')).listen(9001)
                        ];
                    }
                }
            }
        },

        // uglify js files and place in minified dir
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/js/src',
                    src: '**/*.js',
                    dest: '<%= config.app %>/js',
                    flatten: true
                }]
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'connect',
            'watch'
        ]);
    });
};