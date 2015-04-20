/**
 *
 * @note must be used with Iron Router data bind
 *
 * @returns {*}
 */
cbrw.Presenters.Articles.show = function (articleId) {
  return cbrw.Stores.Article._collection.findOne(articleId);
};
