//
// Renders an article

class ArticlesDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = './assets/javascripts/templates/articles/article.html';
  }
}

module.exports = ArticlesDirective;
