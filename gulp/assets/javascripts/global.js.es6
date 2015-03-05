/**
 * Main js starting point for regular users
 */

require('angular');
require('./../../../bower_components/angular-truncate/src/truncate');
var register = require('./../../../vendor/assets/javascripts/angular/register');

var LocaleConfig = require('./application/config/locale');

var cbrwizard = require('./application/angular/modules/cbrwizard');
var cbrwizardFilters = require('./application/angular/modules/cbrwizard_filters');

var ArticlesModel = require('./application/angular/services/articles_model');
var ArticleModel = require('./application/angular/services/article_model');

var PagesIndexController = require('./application/angular/controllers/pages_index_controller');
var ArticlesShowController = require('./application/angular/controllers/articles_show_controller');

var ArticlesDirective = require('./application/angular/directives/articles_directive');
var ArticleDirective = require('./application/angular/directives/article_directive');
var TagsDirective = require('./application/angular/directives/tags_directive');
var TrianglesDirective = require('./application/angular/directives/triangles_directive');


register('cbrwizard')
  .controller('PagesIndexController', PagesIndexController)
  .controller('ArticlesShowController', ArticlesShowController)
  .service('ArticlesModel', ArticlesModel)
  .service('ArticleModel', ArticleModel)
  .directive('articlesDirective', ArticlesDirective)
  .directive('articleDirective', ArticleDirective)
  .directive('trianglesDirective', TrianglesDirective)
  .directive('tagsDirective', TagsDirective);

/**
 * Configures app and bootstraps angular
 */
$(function(){
  LocaleConfig.updateLocales();
  angular.bootstrap(angular.element(document.body), ['cbrwizard', 'truncate', 'cbrwizardFilters']);
});