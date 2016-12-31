var gulp = require('gulp');
var mjml = require('gulp-mjml');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('clean', function() {
    return del([
        '*.html'
    ]);
});

gulp.task('compile-mjml', function () {
    gulp.src('*.mjml')
        .pipe(mjml())
        .pipe(gulp.dest('.'));
});

gulp.task('done', function() {
});

gulp.task('default', function() {
    runSequence('clean', 'compile-mjml', 'done');
});
