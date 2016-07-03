var gulp = require('gulp');
var stylus = require('gulp-stylus');
var stylint = require('gulp-stylint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var stylFiles = './assets/styl/*.styl';

function bsjs(file) {
    return './assets/bootstrap-stylus-5.0.2/js/' + file + '.js'
};
var bootstrapJsFiles = [bsjs('collapse'), bsjs('button'), bsjs('dropdown')];

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

gulp.task('bootstrap-js', function() {
    return gulp.src(bootstrapJsFiles)
        .pipe(concat('bootstrap.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'))
});

gulp.task('watch', function() {
    gulp.watch([stylFiles, './assets/bootstrap-stylus-5.0.2/bootstrap/*.styl'], ['stylus']);
});

gulp.task('default', ['stylus', 'bootstrap-js']);