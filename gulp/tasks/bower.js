var gulp = require('gulp'),
  bower = require('gulp-bower');

/**
 * Installs bower components
 */
gulp.task('bower', function () {
  return bower()
    .pipe(gulp.dest('./../bower_components'))
});