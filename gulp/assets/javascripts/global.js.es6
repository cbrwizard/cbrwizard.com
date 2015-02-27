var angular = require('angular');
var cbrwizard = require('./application/angular/modules/cbrwizard');
var PagesIndexController = require('./application/angular/controllers/pages_index_controller');
var articlesDirective = require('./application/angular/directives/articles_directive');

//todo: properly require all controllers and directives from their files
//todo: convert all angular files to es6

cbrwizard.controller('PagesIndexController', PagesIndexController);
cbrwizard.directive('articlesDirective', articlesDirective);

//angular.element(document).ready(function () {
//  var template = document.getElementById("myTemplate");
//  var appDiv = document.getElementById("myApp");
//  setTimeout(function () {
//    appDiv.innerHTML = template.innerHTML;
//    angular.bootstrap(angular.element(appDiv), ['myApp']);
//  }, 1000);
//});

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