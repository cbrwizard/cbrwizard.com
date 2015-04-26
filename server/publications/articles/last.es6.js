/**
 * Returns last articles
 */
Meteor.publish('articlesLast', function () {
  return cbrw.Collections.Articles.find();
});