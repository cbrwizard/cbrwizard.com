//
// Handles data interaction on home page

var articlesModel = require('../services/articles_model');

class PagesIndexController {
  constructor($scope, $http, articlesModel) {
    $scope.data = articlesModel.data;
    articlesModel.loadArticles();
  }
}

module.exports = PagesIndexController;
