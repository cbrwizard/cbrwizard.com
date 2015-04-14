Meteor.methods({
  /**
   * TODO: remove, not used
   */
  articlesLast: function () {
    console.log('called meteor method articlesLast');
    // alert(200);
    //return [100, 200, 300];
    //return cbrw.Actions.Articles.last();
    return cbrw.Stores.Article.all();
  }
});
