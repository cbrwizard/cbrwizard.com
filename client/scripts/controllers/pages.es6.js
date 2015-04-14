/**
 * Handles not related to database pages
 */
cbrw.Controllers.Pages = cbrw.Controllers.Application.extend({
  about: function () {
    this.render('pagesAbout');
    cbrw.Controllers.Helpers.DefaultEffect(this);
  },

  index: function () {
    this.render('pagesIndex');
    this.render('effectTriangles', {
      to: 'effect'
    });
    /**
     * TODO: probably move to an effect renderer class
     * TODO: check for memory leaks and probably destroy itself on route change
     */
    Template.effectTriangles.rendered = function () {
      const trianglesContainer = document.querySelector('.effect--triangles');
      trianglesEffect = new cbrw.Effects.Triangles(trianglesContainer);
    };

    Meteor.subscribe('articlesLast');
  }
});
