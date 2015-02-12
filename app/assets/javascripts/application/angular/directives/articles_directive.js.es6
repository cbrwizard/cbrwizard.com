//
// Renders an article
var cbrwizard = require('../modules/cbrwizard');
console.log(cbrwizard);

cbrwizard.directive('articlesDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'articles/article.html'
  }
});
