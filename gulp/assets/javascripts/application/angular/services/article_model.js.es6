/**
 * Contains data from articles model for a single record
 */
class ArticleModel {
  constructor($http) {
    this.$http = $http;
    this.data = {};
  }

  /**
   * Loads an article from API
   *
   * @param articleId {String}
   * @todo load an article and pass it to a controller
   */
  loadArticle(articleId) {
    if (articleId != 0) {
      console.log(articleId);
    }
    //this.$http.get(Routes.api_v1_articles_path({format: 'json'}))
    //  .success((data) => {
    //    this.data.articles = data;
    //    console.debug('Successfully loaded an article.');
    //  })
    //  .error(() => {
    //    console.error('Failed to load an article.');
    //})
  }
}

module.exports = ArticleModel;