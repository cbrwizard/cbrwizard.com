/**
 * Handles not related to database pages
 */
cbrw.Controllers.Actions.Pages = class Pages {
  static about() {
    /**
     * TODO: probably move to an effect renderer class
     * TODO: check for memory leaks and probably destroy itself on route change
     */
    Template.pagesAbout.rendered = function () {
      const trianglesContainer = document.querySelector('.effect--triangles');
      new cbrw.Effects.Triangles(trianglesContainer);
      window.dispatchEvent(new Event('resize'));
    };
    this.render();
  }
};
