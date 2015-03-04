/**
 * Configuration for gulp tasks
*/

var publicAssets = './public/assets',
  sourceFiles = './gulp/assets',
  bowerDir = './bower_components';

module.exports = {
  publicAssets: publicAssets,
  bowerDir: bowerDir,
  sass: {
    src: sourceFiles + '/stylesheets/**/*.scss',
    dest: publicAssets + '/stylesheets',
    settings: {
      imagePath: '/assets/images' // Used by the image-url helper
    }
  },
  images: {
    src: sourceFiles + '/images/**/*',
    dest: publicAssets + '/images'
  },
  browserify: {
    bundleConfigs: [{
      entries: sourceFiles + '/javascripts/global.js.es6',
      dest: publicAssets + '/javascripts',
      outputName: 'global.js',
      extensions: ['.js', '.js.es6']
    }]
  },
  slim: {
    src: sourceFiles + '/javascripts/application/angular/templates/**/*.slim',
    dest: publicAssets + '/javascripts/templates'
  }
};