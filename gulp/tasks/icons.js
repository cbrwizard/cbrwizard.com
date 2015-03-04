var config = require('../config'),
  gulp = require('gulp');

/**
 * Includes fontawesome icons
 */
gulp.task('icons', function () {
  gulp.src(config.bowerDir + '/fontawesome/fonts/**/*')
    .pipe(gulp.dest(config.publicAssets + '/fonts'))
});
