var TrianglesEffect = require('./../../effects/three_js/triangles_effect');

/**
 * Renders a three js triangles effect
 */
class TrianglesDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = './assets/javascripts/templates/effects/triangles.html';
  }

  /**
   * Renders TrianglesEffect on ready
   *
   * @param _scope
   * @param element
   * @param _attrs
   */
  link(_scope, element, _attrs) {
    new TrianglesEffect(
      element.find('.effect__three-js')[0]
    );
  }
}

module.exports = TrianglesDirective;
