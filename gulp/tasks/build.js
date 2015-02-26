//
// Tasks for first gulp run

var gulp = require('gulp'),
  gulpSequence = require('gulp-sequence');

gulp.task('build', function (cb) {
  var tasks = ['clean', 'bower', ['images', 'icons'], ['sass', 'slim', 'browserify']];
  if (process.env.RAILS_ENV === 'production') tasks.push('rev');
  tasks.push(cb);
  gulpSequence.apply(this, tasks);
});
