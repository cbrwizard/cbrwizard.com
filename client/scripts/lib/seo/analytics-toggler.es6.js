/**
 * Turns on seo analytics metrics
 */
class AnalyticsToggler {
  static init() {
    if (Meteor.settings.public.env === 'production') {
      GAnalytics.pageview();
      Metrika.hit(window.location.origin + Router.current().url);
    }
  }
}

cbrw.Seo.AnalyticsToggler = AnalyticsToggler;