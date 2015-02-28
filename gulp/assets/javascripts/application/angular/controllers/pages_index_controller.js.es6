//
// Handles data interaction on home page

class PagesIndexController {
  constructor($scope, $http, ArticlesModel) {
    $scope.data = ArticlesModel.data;
    ArticlesModel.loadArticles();
  }
}

module.exports = PagesIndexController;
