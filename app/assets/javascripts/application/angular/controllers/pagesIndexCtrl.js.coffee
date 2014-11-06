# Handles data interaction on home page
@app.cbrwizard.controller 'PagesIndexCtrl', ['$scope', '$http', 'articlesModel', ($scope, $http, articlesModel) ->
  $scope.data = articlesModel.data

  articlesModel.loadArticles()
]
