/**
 * Handles articles pages
 */
cbrw.Controllers.Articles = cbrw.Controllers.Application.extend({
  index: function() {
    this.render('articlesIndex');
    cbrw.Controllers.Helpers.DefaultEffect(this);
  },

  show: function () {
    "use strict";
    this.render('articlesShow');
    cbrw.Controllers.Helpers.DefaultEffect(this);
    //  TODO: get id of an article here and bind it to a helper
  }
});
