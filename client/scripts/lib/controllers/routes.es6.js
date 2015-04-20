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

Router.route('/article/:id', {
  name: 'articles.show',
  template: 'articlesShow',
  waitOn: function () {
    return Meteor.subscribe('article');
  },
  data: function () {
    return {id: this.params.id};
  },
  action: cbrw.Controllers.Actions.Articles.show
});
