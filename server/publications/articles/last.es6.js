Meteor.publish('articlesLast', function () {
  "use strict";
  return cbrw.Collections.Articles.find();
});