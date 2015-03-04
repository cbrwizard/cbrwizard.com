/**
 * Contains data from articles model
 */
class ArticlesModel {
  constructor($http) {
    this.$http = $http;
    this.data = {};
  }

  /**
   * Loads articles from API
   */
  loadArticles() {
    this.$http.get(Routes.api_v1_articles_path({format: 'json'}))
      .success((data) => {
        this.data.articles = data;
        console.debug('Successfully loaded articles.');
      })
      .error(() => {
        console.error('Failed to load articles.');
    })
  }
}

module.exports = ArticlesModel;