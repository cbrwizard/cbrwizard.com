var gulp = require('gulp');
var browserifyTask = require('./browserify');

/**
 * Watches for js changes
 *
 * @param callback {Function}
 */
gulp.task('watchify', function (callback) {
  // Start browserify task with devMode === true
  browserifyTask(callback, true);
});