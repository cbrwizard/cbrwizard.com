var gulp = require('gulp'),
  sass = require('gulp-sass'),
  handleErrors = require('../util/handleErrors'),
  config = require('../config').sass,
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer');

/**
 * Parses SASS and minifies css
 */
gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(concat('global.css'))
    .pipe(minifyCSS())
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulp.dest(config.dest));
});
