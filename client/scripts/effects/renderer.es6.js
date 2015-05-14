/**
 * Factory, renders an effect
 */
cbrw.Effects.Renderer = class Renderer {
  /**
   * Renders an effect class instance in a container
   *
   * @param effectClass {class}
   * @param containerSelector {String}
   */
  static createEffect(effectClass, containerSelector) {
    const container = document.querySelector(containerSelector);
    new effectClass(container);
    window.dispatchEvent(new Event('resize'));
  }

  /**
   * Renders a Triangles effect in a container
   *
   * @param containerSelector {String}
   */
  static createTriangles(containerSelector = '.effect--triangles') {
    this.createEffect(cbrw.Effects.Triangles, containerSelector);
  }
};