var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  bower = require('gulp-bower'),
  autoprefix = require('gulp-autoprefixer'),
  traceur = require('gulp-traceur'),
  sourcemaps = require('gulp-sourcemaps'),
  path = require('path'),
  sass = require('gulp-ruby-sass');

var source = require('vinyl-source-stream'); // Used to stream bundle for further handling etc.
var buffer = require('vinyl-buffer'); // Used to stream bundle for further handling etc.
var browserify = require('browserify');
var watchify = require('watchify');
var es6ify = require('es6ify');
var fs = require('fs');


var jsRoot = path.join(__dirname, 'public')
  , bundlePath = path.join(jsRoot, 'application.js');

// Todo: move to package.json
var config = {
  cssPath: './app/assets/stylesheets',
  jsPath: './app/assets/javascripts',
  bowerDir: './bower_components'
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

// Compile js
gulp.task('js', function(){
  gulp.src(config.jsPath + '/**/*.js.es6')
    .pipe(sourcemaps.init())
    .pipe(traceur({modules: 'commonjs'}))
    .pipe(concat('application.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public'))
});

//gulp.task('js:min', function () {
//  return browserify({debug: true})
//    .add(es6ify.runtime)
//    .transform(es6ify)
//    .require(require.resolve('./app/assets/javascripts/application/init.js.es6'), {entry: true})
//    .bundle()
//    .pipe(source('application.js'))
//    .on('error', function (err) {
//      console.error(err);
//    })
//    .pipe(fs.createWriteStream(bundlePath));
//});

es6ify.traceurOverrides = {experimental: true};

// todo: clone es6ify and copy results from there
gulp.task('browserify', function () {
  return browserify('./app/assets/javascripts/application/init.js.es6')
    .add(es6ify.runtime)
    .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
    //.add('./app/assets/javascripts/application/init.js.es6')
    .bundle()
    .pipe(source('application.js'))
    .pipe(gulp.dest('./public'));
});



//gulp.task('browserify', function () {
//  var bundler = browserify({
//    entries: [config.jsPath + '/application/exported_lol.js.es6'], // Only need initial file, browserify finds the deps
//    transform: [es6ify], // We want to convert JSX to normal javascript
//    debug: true, // Gives us sourcemapping
//    cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
//  });
//  var watcher = watchify(bundler);
//
//  return watcher
//    .on('update', function () { // When any files update
//      var updateStart = Date.now();
//      console.log('Updating!');
//      watcher.bundle() // Create new bundle that uses the cache for high performance
//        .pipe(source('main.js'))
//        // This is where you add uglifying etc.
//        .pipe(gulp.dest('./build/'));
//      console.log('Updated!', (Date.now() - updateStart) + 'ms');
//    })
//    .bundle() // Create the initial bundle when starting the task
//    .pipe(source('main.js'))
//    .pipe(gulp.dest('./public'));
//});



// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch(config.cssPath + '/**/*.scss', ['css']);
  gulp.watch(config.jsPath + '/**/*.js.es6', ['js']);
});

gulp.task('default', ['bower', 'icons', 'css', 'browserify', 'watch']);
