//
// Renders tags

var cbrwizard = require('../modules/cbrwizard');
console.log(cbrwizard);

cbrwizard.directive('tagsDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'tags/tag.html'
  }
});
