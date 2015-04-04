/**
 * Routes from Iron Router
 */

Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', function() {
	cbrw.Controllers.Pages.index(this);
}, {
	name: 'pages.index'
});

Router.route('/articles', function() {
	cbrw.Controllers.Articles.index(this);
}, {
	name: 'articles.index'
});

Router.route('/about', function() {
	cbrw.Controllers.Pages.about(this);
}, {
	name: 'pages.about'
});
