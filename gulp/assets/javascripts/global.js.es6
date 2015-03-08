/**
 * Main js starting point for regular users
 */

require('angular');
require('./../../../bower_components/angular-truncate/src/truncate');
const register = require('./../../../vendor/assets/javascripts/angular/register');

const LocaleConfig = require('./application/config/locale');

const cbrwizard = require('./application/angular/modules/cbrwizard');
const cbrwizardFilters = require('./application/angular/modules/cbrwizard_filters');

const ArticlesModel = require('./application/angular/services/articles_model');
const ArticleModel = require('./application/angular/services/article_model');

const PagesIndexController = require('./application/angular/controllers/pages_index_controller');
const ArticlesShowController = require('./application/angular/controllers/articles_show_controller');

const ArticlesDirective = require('./application/angular/directives/articles_directive');
const ArticleDirective = require('./application/angular/directives/article_directive');
const TagsDirective = require('./application/angular/directives/tags_directive');
const TrianglesDirective = require('./application/angular/directives/triangles_directive');


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