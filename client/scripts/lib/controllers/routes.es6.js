/**
 * Routes for Iron Router
 */
Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  yieldRegions: {
    'effectStatic': {to: 'effect'}
  },
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'pages.index',
  template: 'pagesIndex',
  onAfterAction: function () {
    SEO.set({
      title: 'Index - cbrwizard.com - Fyodor Ivanishchev',
      meta: {
        'description': 'Main page of a magical website about the cyber wizard.'
      }
    });
    cbrw.Seo.AnalyticsToggler.init();
  }
});

Router.route('/about', {
  template: 'pagesAbout',
  name: 'pages.about',
  onAfterAction: function () {
    SEO.set({
      title: 'About - cbrwizard.com - Fyodor Ivanishchev',
      meta: {
        'description': 'Reveal a cbrwizard identity!'
      }
    });
    cbrw.Seo.AnalyticsToggler.init();
  }
});

Router.route('/links', {
  template: 'linksIndex',
  name: 'links.index',
  onAfterAction: function () {
    SEO.set({
      title: 'Links - cbrwizard.com - Fyodor Ivanishchev',
      meta: {
        'description': 'Where to find cbrwizard'
      }
    });
    cbrw.Seo.AnalyticsToggler.init();
  }
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
  action: cbrw.Controllers.Actions.Experiments.index,
  onAfterAction: function () {
    SEO.set({
      title: 'Experiments - cbrwizard.com - Fyodor Ivanishchev',
      meta: {
        'description': 'Weird magical experiments'
      }
    });
    cbrw.Seo.AnalyticsToggler.init();
  }
});
