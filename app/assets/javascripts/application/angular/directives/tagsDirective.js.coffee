##
# Renders tags
# @note is used on articlesDirective
# @todo: combine with route filter
@app.cbrwizard.directive "tagsDirective", ->
  restrict: "E"
  templateUrl: "tags/tag.html"
