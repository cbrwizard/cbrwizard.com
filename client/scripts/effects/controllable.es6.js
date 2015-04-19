/**
 * A base class for an input controllable three js effect
 */
cbrw.Effects.Controllable = class Controllable extends cbrw.Effects.ThreeJs {
  /**
   *
   * @param container {DOM element}
   */
  constructor(container) {
    super(container);
    this._paintEverything();
  }

  /**
   * Runs every frame with updated controls and renders a result
   */
  render() {
    this.controls.update();
    super.render();
  }

  /**
   * Prepares a scene by configuring controls, lights and a camera
   *
   * @private
   */
  _prepareScene() {
    this._createControls();
    super._prepareScene();
  }

  /**
   * Sets up controls which allow camera to be moved
   *
   * @private
   */
  _createControls() {
    this.controls = new THREE.TrackballControls(this.camera, this.container);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 5;
    this.controls.panSpeed = 5;
    this.controls.noZoom = false;
    this.controls.noPan = false;
    this.controls.staticMoving = true;
    this.controls.dynamicDampingFactor = 0.3;
    this.controls.maxDistance = 1500;
    this._handleControlsOnResize();
  }

  /**
   * Adds a window resize listener which updates controls so that they work
   *
   * @private
   */
  _handleControlsOnResize() {
    "use strict";
    window.addEventListener('resize', _.debounce(function () {
      this.controls.handleResize();
    }.bind(this), 300));
  }
};
