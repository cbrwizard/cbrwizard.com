##
# Gets a locale for a passed path
# @usage in article template
# @param path [String] path to a rails locale translation
# @return [String] translation for a set locale
# @note locale must be set manually inside an application
@app.angularFilters.filter 'route', ->
  (path) ->
    console.log path
    eval("Routes.#{path}") if path
