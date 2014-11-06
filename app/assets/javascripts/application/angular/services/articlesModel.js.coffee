# Contains data from articles model
# @note is used in PagesIndexCtrl
angular.module('cbrwizard').factory('articlesModel', ['$http', ($http) ->
  # Articles storage
  articlesModel =
    data :
      articles : [
        {title : 'Загружаем статьи...', body : ""}
      ]

  console.log("Initialized articlesModel.")


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
