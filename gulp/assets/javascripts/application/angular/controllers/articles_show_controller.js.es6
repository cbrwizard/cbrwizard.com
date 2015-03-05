/**
 * Handles data interaction on an article page
 */
class ArticleShowController {
  constructor($scope, $http, ArticleModel) {
    this.model = ArticleModel;
  }

  /**
   * Loads an article
   *
   * @param articleId
   */
  loadArticle(articleId) {
    this.model.loadArticle(articleId);
  }
}

module.exports = ArticleShowController;
