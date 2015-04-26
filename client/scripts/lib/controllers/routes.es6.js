/**
 * Routes for Iron Router
 */
Router.configure({
  layoutTemplate: 'mainLayout',
  yieldRegions: {
    'effectStatic': {to: 'effect'}
  }
});

Router.route('/', {
  name: 'pages.index',
  template: 'pagesIndex',
  waitOn: function () {
    return Meteor.subscribe('articlesLast');
  },
  data: function () {
    return {articles: cbrw.Collections.Articles.find()};
  }
});

Router.route('/about', {
  template: 'pagesAbout',
  name: 'pages.about',
  yieldRegions: {
    'effectTriangles': {to: 'effect'}
  },
  action: cbrw.Controllers.Actions.Pages.about
});

Router.route('/articles', {
  template: 'articlesIndex',
  name: 'articles.index'
});

Router.route('/article/:_id', {
  name: 'articles.show',
  template: 'articlesShow',
  waitOn: function () {
    return Meteor.subscribe('article', this.params._id);
  },
  data: function () {
    return {article: cbrw.Collections.Articles.findOne({_id: this.params._id})};
  }
});
