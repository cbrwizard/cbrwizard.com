var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  bower = require('gulp-bower'),
  autoprefix = require('gulp-autoprefixer'),
  path = require('path'),
  sass = require('gulp-ruby-sass'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  es6ify = require('es6ify');


// Todo: move to package.json
var config = {
  cssPath: './app/assets/stylesheets',
  jsPath: './app/assets/javascripts',
  bowerDir: './bower_components'
};

var environment = {
  development: false
};

// Include bower components
gulp.task('bower', function () {
  bower()
    .pipe(gulp.dest(config.bowerDir))
});

// Include fontawesome icons
gulp.task('icons', function () {
  gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
    .pipe(gulp.dest('./public/fonts'))
});

// Compile css
gulp.task('css', function () {
  sass(config.cssPath + '/',
    {
      style: 'compressed',
      loadPath: [
        config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
        config.bowerDir + '/fontawesome/scss',
        config.cssPath
      ]
    }
  )
  .pipe(concat('application.css'))
  .pipe(minifyCSS())
  .pipe(autoprefix('last 2 version'))
  .pipe(gulp.dest('./public'));
});

// Compiles js
gulp.task('js', function () {
  var bundler = browserify({
    basedir: __dirname,
    extensions: ['.js'],
    debug: environment.isDevelopment,
    cache: {},
    packageCache: {},
    fullPaths: environment.isDevelopment
  }).add(es6ify.runtime)
    .transform(es6ify)
    .require(require.resolve('./app/assets/javascripts/application/init.js'), {entry: true});

  var bundle = function () {
    return bundler
      .bundle()
      .pipe(source('application.js'))
      .pipe(gulp.dest('./public'));
  };

  if (environment.isDevelopment) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }
  return bundle();
});

// Sets current state to development
gulp.task('setDevelopment', function () {
  environment.isDevelopment = true;
});

// Watch files for changes
gulp.task('watch', function () {
  gulp.watch(config.cssPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['setDevelopment', 'bower', 'icons', 'css', 'js', 'watch']);
gulp.task('release', ['bower', 'icons', 'css', 'js']);
