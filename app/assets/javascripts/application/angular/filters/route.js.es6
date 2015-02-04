//
// Gets a locale for a passed path
//
// @param path [String] path to a rails locale translation
// @return [String] translation for a set locale
// @note locale must be set manually inside an application
app.angularFilters.filter('route', function(){
  return function(path){
    if (path) {
      return eval(`Routes.${path}`);
    }
  }
});
