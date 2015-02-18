var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  purge = require('gulp-css-purge'),
  bower = require('gulp-bower'),
  autoprefix = require('gulp-autoprefixer'),
  sass = require('gulp-ruby-sass');

var config = {
  sassPath: './app/assets/stylesheets',
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
  sass(config.sassPath + '/',
    {
      style: 'compressed',
      loadPath: [
        config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
        config.bowerDir + '/fontawesome/scss',
        config.sassPath
      ]
    }
  )
  .pipe(autoprefix('last 2 version'))
  .pipe(concat('application.css'))
  .pipe(purge())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./public'));
});

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'icons', 'css', 'watch']);
