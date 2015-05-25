/**
 * Routes for Iron Router
 */
Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  yieldRegions: {
    'effectStatic': {to: 'effect'}
  },
  notFoundTemplate: 'notFound',
  onAfterAction: function () {
    cbrw.Seo.MetaStorage.setSeoForPathName(Router.current().route.getName());
    cbrw.Seo.AnalyticsToggler.init();
  }
});

Router.route('/', {
  name: 'pages.index',
  template: 'pagesIndex'
});

Router.route('/about', {
  name: 'pages.about',
  template: 'pagesAbout'
});

Router.route('/links', {
  name: 'links.index',
  template: 'linksIndex'
});

Router.route('/experiments', {
  name: 'experiments.index',
  template: 'experimentsIndex',
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
