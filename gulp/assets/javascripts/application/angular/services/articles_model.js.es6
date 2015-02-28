//
// Contains data from articles model

class ArticlesModel {
  constructor($http) {
    this.$http = $http;
    this.data = {};
  }

  loadArticles() {
    this.$http.get('./api/v1/articles')
      .success((data) => {
        this.data.articles = data;
        console.log('Successfully loaded articles.');
      })
      .error(() => {
        console.error('Failed to load articles.');
    })
  }
}

module.exports = ArticlesModel;