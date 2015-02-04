//
// Contains data from articles model
angular.module('cbrwizard').factory('articlesModel', ['$http', function($http){
  // Articles storage
  var articlesModel = {
    data: {}
  };

  // Loads articles via API
  articlesModel.loadArticles = function(){
    $http.get('./api/v1/articles')
      .success((data) => {
        this.data.articles = data;
        console.log('Successfully loaded articles.');
      })
      .error(() => {
        console.error('Failed to load articles.');
      })
  }

  return articlesModel;
}]);
