//
// Watches for JS and other files changes

var gulp = require('gulp'),
  config = require('../config'),
  browserifyTask = require('./browserify');

gulp.task('watchify', function (callback) {
  // Start browserify task with devMode === true
  browserifyTask(callback, true);
});

gulp.task('watch', ['browserify','browserSync'], function(callback) {
  gulp.watch(config.sass.src,   ['sass']);
  gulp.watch(config.images.src, ['images']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
