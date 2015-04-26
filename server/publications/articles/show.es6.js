/**
 * Returns a single article info
 */
Meteor.publish('article', function (articleId) {
  return cbrw.Collections.Articles.find({_id: articleId});
});