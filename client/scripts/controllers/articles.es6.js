/**
 * Handles articles pages
 */
cbrw.Controllers.Articles = class ArticlesController {
	/**
	 * Articles list page
	 * @param  {IronRouter} router
	 */
	static index(router) {
		router.render('articlesIndex');
	}
};
