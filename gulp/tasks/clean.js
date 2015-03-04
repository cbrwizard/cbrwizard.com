var gulp = require('gulp'),
  del = require('del'),
  config = require('../config');

/**
 * Cleans previously generated files
 */
gulp.task('clean', function (cb) {
  del([config.publicAssets], cb);
});