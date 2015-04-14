Meteor.publish('articlesLast', function () {
  "use strict";
  return cbrw.Stores.Article.all();
});