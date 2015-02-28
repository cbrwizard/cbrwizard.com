var angular = require('angular');
var cbrwizard = require('./application/angular/modules/cbrwizard');
var ArticlesModel = require('./application/angular/services/articles_model');
var PagesIndexController = require('./application/angular/controllers/pages_index_controller');
var ArticlesDirective = require('./application/angular/directives/articles_directive');
var register = require('./../../../vendor/assets/javascripts/angular/register');

//todo: properly require all controllers and directives from their files
//todo: convert all angular files to es6

// probably register is just wrong
// todo: force articles model to work without es6 (but with proper module assignment), then do es6
// and probably register should go in several turns

//cbrwizard.factory('ArticlesModel', ArticlesModel);

register('cbrwizard')
  .controller('PagesIndexController', PagesIndexController)
  .service('ArticlesModel', ArticlesModel)
  .directive('articlesDirective', ArticlesDirective);

//cbrwizard.controller('PagesIndexController', PagesIndexController);
//cbrwizard.directive('ArticlesDirective', ArticlesDirective);

//cbrwizard.factory('articlesDirective', ['',() =>
//  new ArticlesDirective()]);

////var app = angular.module('todoApp', []);
$(function(){
  console.log(cbrwizard);
  angular.bootstrap(angular.element(document.body), ['cbrwizard']);

  //var template = document.getElementById("myTemplate");
  //console.log(template);
  //var appDiv = document.getElementById("myApp");
  //console.log(appDiv);
  //appDiv.innerHTML = template.innerHTML;
  //angular.bootstrap(angular.element(appDiv), ['cbrwizard']);
});