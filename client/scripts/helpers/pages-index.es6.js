Template.pagesIndex.helpers({
  articles: function() {
    console.log('called articles helper');
    return cbrw.Presenters.Articles.last();
  }
});
