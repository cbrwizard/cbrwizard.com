/**
 * Routes from Iron Router
 */

Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', function() {
  cbrw.Controllers.Pages.index(this);
});

Router.route('/articles', function() {
  cbrw.Controllers.Articles.index(this);
});
