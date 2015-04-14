cbrw.Presenters.Articles.last = function() {
  console.debug('called Articles last presenter');
  return cbrw.Stores.Article.all();
};
