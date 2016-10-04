var gulp = require('gulp');
var connect = require('gulp-connect');
var bower = require('gulp-bower');

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('js/lib/'))
});

gulp.task('connect', function () {
    connect.server();
});
gulp.task('default', ['connect']);