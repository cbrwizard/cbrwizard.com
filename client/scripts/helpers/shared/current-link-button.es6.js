/**
 * Returns a class to change style of a current link
 */
Template.registerHelper('currentLinkButton', function (routeName) {
  if (Router.current().route.getName() === routeName) {
    return 'menu__link--current'
  }
});