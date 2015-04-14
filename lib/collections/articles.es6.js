cbrw.Collections.Articles = new Meteor.Collection("articles");

/**
 * tmp
 */
Meteor.startup(function() {
  Meteor.call('seed');
});
