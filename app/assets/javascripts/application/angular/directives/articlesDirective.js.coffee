# Renders an article
# @note is used on pagesIndexCtrl
@app.cbrwizard.directive "articlesDirective", ->
  restrict: "E"
  templateUrl: "articles/article.html"
