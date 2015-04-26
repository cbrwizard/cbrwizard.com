/**
 * Handles experiments pages
 */
cbrw.Controllers.Actions.Experiments = class Experiments {
  static index() {
    /**
     * TODO: probably move to an effect renderer class
     * TODO: check for memory leaks and probably destroy itself on route change
     */
    Template.experimentsIndex.rendered = function () {
      const trianglesContainer = document.querySelector('.effect--triangles');
      new cbrw.Effects.Triangles(trianglesContainer);
      window.dispatchEvent(new Event('resize'));
    };
    this.render();
  }
};
