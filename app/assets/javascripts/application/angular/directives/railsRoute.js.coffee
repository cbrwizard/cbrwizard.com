#
@app.cbrwizard.directive "railsRoute", ->
  restrict: "A"
  scope:
    key: '='
    accept : "&"
  compile: (link)->
    console.log path
#    Routes.article_path(id)
