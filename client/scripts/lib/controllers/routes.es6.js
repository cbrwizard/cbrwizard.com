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
  template: 'pagesIndex'
});

Router.route('/about', {
  template: 'pagesAbout',
  name: 'pages.about'
});

Router.route('/links', {
  template: 'linksIndex',
  name: 'links.index'
});

Router.route('/experiments', {
  template: 'experimentsIndex',
  name: 'experiments.index',
  yieldRegions: {
    'effectTriangles': {to: 'effect'}
  },
  waitOn: function () {
    return TAPi18n.subscribe('experimentsAll');
  },
  data: function () {
    return {experiments: cbrw.Collections.Experiments.find({display: {$ne: false}})};
  },
  action: cbrw.Controllers.Actions.Experiments.index
});
