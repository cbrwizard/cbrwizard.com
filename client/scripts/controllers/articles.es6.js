/**
 * Handles articles pages
 */
cbrw.Controllers.Articles = cbrw.Controllers.Application.extend({
  index: function() {
    this.render('articlesIndex');
    cbrw.Controllers.Helpers.DefaultEffect(this);
  }
});
