//
// Handles data interaction on home page

var articlesModel = require('../services/articles_model');
console.log(articlesModel);

cbrwizard.controller('PagesIndexCtrl', [
  '$scope', '$http', 'articlesModel',
  function($scope, $http, articlesModel){
    $scope.data = articlesModel.data;
    articlesModel.loadArticles();
  }
]);
