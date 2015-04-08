/**
 * Renders a default effect on a page
 */
cbrw.Controllers.Helpers.DefaultEffect = function(router) {
	router.render('effectStatic', {
		to: 'effect'
	});
};
