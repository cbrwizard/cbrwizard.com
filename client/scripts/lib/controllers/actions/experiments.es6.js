/**
 * Handles experiments pages
 */
cbrw.Controllers.Actions.Experiments = class Experiments {
  static index() {
    this.render();
    /**
     * TODO: check for memory leaks and probably destroy itself on route change
     */
    Template.experimentsIndex.rendered = function () {
      cbrw.Effects.Renderer.createTriangles();
    };
  }
};
