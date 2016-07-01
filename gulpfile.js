var gulp = require('gulp');
var stylus = require('gulp-stylus');
var stylint = require('gulp-stylint');

var stylFiles = './assets/styl/*.styl';

gulp.task('stylus-lint', function() {
    return gulp.src(stylFiles)
        .pipe(stylint({
            config: './assets/styl/.stylintrc'
        }))
        .pipe(stylint.reporter())
        .pipe(stylint.reporter('fail'));
});

gulp.task('stylus-compile', function() {
    return gulp.src(stylFiles)
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('stylus', ['stylus-lint', 'stylus-compile']);

gulp.task('watch', function() {
    gulp.watch(stylFiles, ['stylus']);
});

gulp.task('default', ['stylus']);