/**
 * Routes for Iron Router
 */
Router.route('/', {
  controller: 'cbrw.Controllers.Pages',
  action: 'index',
  name: 'pages.index'
});

Router.route('/about', {
  controller: 'cbrw.Controllers.Pages',
  action: 'about',
  name: 'pages.about'
});

Router.route('/articles', {
  controller: 'cbrw.Controllers.Articles',
  action: 'index',
  name: 'articles.index'
});
