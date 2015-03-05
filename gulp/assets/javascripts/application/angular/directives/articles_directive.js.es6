/**
 * Renders articles
 */
class ArticlesDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = './assets/javascripts/templates/articles/index.html';
  }
}

module.exports = ArticlesDirective;
