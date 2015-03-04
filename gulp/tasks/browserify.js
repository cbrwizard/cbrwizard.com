var _ = require('lodash'),
  browserify = require('browserify'),
  bundleLogger = require('../util/bundleLogger'),
  config = require('../config').browserify,
  gulp = require('gulp'),
  lodash = require('lodash'),
  handleErrors = require('../util/handleErrors'),
  source = require('vinyl-source-stream'),
  es6ify = require('es6ify'),
  uglify = require('gulp-uglify'),
  buffer = require('vinyl-buffer'),
  watchify = require('watchify');

/**
 * Compiles JS with browserify
 */
var browserifyTask = function(callback, devMode) {

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    if(devMode) {
      _.extend(bundleConfig, watchify.args, { debug: true });
      bundleConfig = _.omit(bundleConfig, ['external', 'require']);
    }

    var b = browserify(es6ify.runtime, _.omit(bundleConfig, 'entries'));

    var bundle = function() {
      bundleLogger.start(bundleConfig.outputName);

      return b
        .add(bundleConfig.entries)
        .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js.es6$/))
        .bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(buffer())
        //.pipe(uglify({preserveComments: 'some'})) //todo: enable only for production
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if(devMode) {
      b = watchify(b);
      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      if(bundleConfig.require) b.require(bundleConfig.require);
      if(bundleConfig.external) b.external(bundleConfig.external);
    }

    var reportFinished = function() {
      bundleLogger.end(bundleConfig.outputName);

      if(bundleQueue) {
        bundleQueue--;
        if(bundleQueue === 0) {
          callback();
        }
      }
    };

    return bundle();
  };

  config.bundleConfigs.forEach(browserifyThis);
};

gulp.task('browserify', browserifyTask);

module.exports = browserifyTask;
