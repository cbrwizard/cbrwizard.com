##
# Contains data from articles model
# @usage in PagesIndexCtrl
angular.module('cbrwizard').factory('articlesModel', ['$http', ($http) ->
  # Articles storage
  articlesModel =
    data : {}

  # Loads articles via API
  articlesModel.loadArticles = ->
    $http.get('./api/v1/articles').success((data) =>
      @data.articles = data
      console.log('Successfully loaded articles.')
    ).error(->
      console.error('Failed to load articles.')
    )

  articlesModel
])
