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
  name: 'links.index',
  waitOn: function () {
    return Meteor.subscribe('linksAll');
  },
  data: function () {
    return {links: cbrw.Collections.Links.find()};
  }
});

Router.route('/experiments', {
  template: 'experimentsIndex',
  name: 'experiments.index',
  yieldRegions: {
    'effectTriangles': {to: 'effect'}
  },
  action: cbrw.Controllers.Actions.Experiments.index
});
