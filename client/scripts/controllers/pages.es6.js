/**
 * Handles not related to database pages
 */
cbrw.Controllers.Pages = class PagesController {
	/**
	 * Main page
	 * @param  {IronRouter} router
	 */
	static index(router) {
		router.render('pagesIndex');
	}

	/**
	 * About page
	 * @param  {IronRouter} router
	 */
	static about(router) {
		router.render('pagesAbout');
	}
};
