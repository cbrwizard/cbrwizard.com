//var foo = require('./application/exported_lol');
//console.log(foo(22));

var log = msg => console.log(msg + 55);
log(15);

var angular = require('angular');
var cbrwizard = require('./application/angular/modules/cbrwizard');

//todo: properly require all controllers and directives from their files

var articlesModel = require('./application/angular/services/articles_model');
cbrwizard.controller('PagesIndexCtrl', [
  '$scope', '$http', 'articlesModel',
  function ($scope, $http, articlesModel) {
    $scope.data = articlesModel.data;
    articlesModel.loadArticles();
  }
]);

cbrwizard.directive('articlesDirective', function () {
  return {
    restrict: 'E',
    templateUrl: './assets/javascripts/templates/articles/article.html'
  }
});

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