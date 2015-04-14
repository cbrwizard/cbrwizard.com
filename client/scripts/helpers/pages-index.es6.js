Template.pagesIndex.helpers({
  articles: function() {
    console.debug('called articles helper');
    return cbrw.Presenters.Articles.last();
  }
});
