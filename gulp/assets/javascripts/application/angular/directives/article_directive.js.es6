/**
 * Renders an article
 */
class ArticleDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = './../assets/javascripts/templates/articles/show.html';
    this.replace = true;
    this.require = '^ngController';
    this.scope = {
      articleId: '='
    };
  }

  /**
   * Loads an article after being ready
   *
   * @param _scope
   * @param _element
   * @param attrs
   * @param parentController
   */
  link(_scope, _element, attrs, parentController) {
    parentController.loadArticle(attrs.articleId);
  }
}

module.exports = ArticleDirective;
