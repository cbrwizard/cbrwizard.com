var angular = require('angular');
var cbrwizard = require('./application/angular/modules/cbrwizard');
var cbrwizardFilters = require('./application/angular/modules/cbrwizard_filters');
var ArticlesModel = require('./application/angular/services/articles_model');
var PagesIndexController = require('./application/angular/controllers/pages_index_controller');
var ArticlesDirective = require('./application/angular/directives/articles_directive');
var TagsDirective = require('./application/angular/directives/tags_directive');
var register = require('./../../../vendor/assets/javascripts/angular/register');
var truncate = require('./../../../vendor/assets/javascripts/angular/truncate');

register('cbrwizard')
  .controller('PagesIndexController', PagesIndexController)
  .service('ArticlesModel', ArticlesModel)
  .directive('articlesDirective', ArticlesDirective)
  .directive('tagsDirective', TagsDirective);

$(function(){
  angular.bootstrap(angular.element(document.body), ['cbrwizard', 'truncate', 'cbrwizardFilters']);
});