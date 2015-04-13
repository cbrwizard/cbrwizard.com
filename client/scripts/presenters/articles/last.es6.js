cbrw.Presenters.Articles.last = function() {
  console.log('called Articles last presenter');
  Meteor.call('articlesLast');
};
