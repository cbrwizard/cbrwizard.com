//
// Gets a rails route for a passed path
//
// @param path [String] rails route path
// @return [String]
var RouteFilter = function(){
  return function(path){
    if (path) {
      return eval(`Routes.${path}`);
    }
  }
};

module.exports = RouteFilter;