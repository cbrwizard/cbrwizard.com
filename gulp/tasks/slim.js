var gulp = require('gulp'),
  slim = require('gulp-slim'),
  config = require('../config').slim;

/**
 * Compiles slim assets into html
 */
gulp.task('slim', function () {
  gulp.src(config.src)
    .pipe(slim({
      pretty: true,
      options: ["encoding='utf-8'"]
    }))
    .pipe(gulp.dest(config.dest));
});