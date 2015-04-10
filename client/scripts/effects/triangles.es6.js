/**
 * Turns on animated triangles
 */
cbrw.Effects.Triangles = class Triangles extends cbrw.Effects.Controllable {
  /**
   * Prepares a scene by configuring controls, lights and a camera
   *
   * @private
   */
  _prepareScene() {
    this._adjustCamera();
    super._prepareScene();
  }

  /**
   * Prepares objects by drawing them
   *
   * @private
   */
  _prepareObjects() {
    super._prepareObjects();
    this._drawAll();
  }

  /**
   * Moves camera a bit to the background
   *
   * @private
   */
  _adjustCamera() {
    this.camera.position.z = 500;
  }

  /**
   * Adds all lights to a scene
   *
   * @private
   */
  _addLights() {
    super._addLights();
    const lightsPositions = [
      [0, 500, 2000],
      [5000, 0, 1000],
      [0, 1000, 500]
    ];
    for (let position of lightsPositions) {
      let light = new THREE.SpotLight(0xffffff, 0.75);
      light.position.set(position[0], position[1], position[2]);
      this.scene.add(light);
    }
  }

  /**
   * Draws all objects
   *
   * @private
   */
  _drawAll() {
    const geom = new THREE.BoxGeometry(1, 1, 1);
    const color = new THREE.Color();
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    let i = 0;
    while (i < 5000) {
      this._draw(geom, color, matrix, quaternion);
      i++;
    }
  }

  /**
   * Draws a single object
   *
   * @param geom {THREE.BoxGeometry}
   * @param color {THREE.Color}
   * @param matrix {THREE.Matrix4}
   * @param quaternion {THREE.Quaternion}
   * @private
   */
  _draw(geom, color, matrix, quaternion) {
    const position = this.constructor.__getPosition();
    const rotation = this.constructor.__getRotation();
    const scale = this.constructor.__getScale();

    quaternion.setFromEuler(rotation, false);
    matrix.compose(position, quaternion, scale);

    this.__setRandomColor(geom, color, matrix);
  }

  /**
   * Gets a random position for an object
   *
   * @returns {THREE.Vector3} position of an object
   * @private
   */
  static __getPosition() {
    let position = new THREE.Vector3();
    position.x = Math.random() * 10000 - 5000;
    position.y = Math.random() * 6000 - 3000;
    position.z = Math.random() * 8000 - 4000;
    return position;
  }

  /**
   * Gets a random angle for an object
   *
   * @returns {THREE.Euler} rotation angle of an object
   * @private
   */
  static __getRotation() {
    let rotation = new THREE.Euler();
    const randomRotation = Math.random() * 2 * Math.PI;
    rotation.x = randomRotation;
    rotation.y = randomRotation;
    rotation.z = randomRotation;
    return rotation;
  }

  /**
   * Gets a random scale for an object
   *
   * @returns {THREE.Vector3} scale
   * @private
   */
  static __getScale() {
    let scale = new THREE.Vector3();
    const randomAngle = Math.random() * 200 + 100;
    scale.x = randomAngle;
    scale.y = randomAngle;
    scale.z = randomAngle;
    return scale;
  }

  /**
   * Sets a random color for every object
   *
   * @param geom {THREE.BoxGeometry}
   * @param color {THREE.Color}
   * @param matrix {THREE.Matrix4}
   * @private
   */
  __setRandomColor(geom, color, matrix) {
    this.constructor._applyVertexColors(geom, color.setHex(Math.random() *
      0xffffff));
    this.geometry.merge(geom, matrix);
  }

  /**
   * Creates a random color for every object
   *
   * @param geometry {THREE.BoxGeometry}
   * @param color {THREE.Color}
   * @private
   */
  static _applyVertexColors(geometry, color) {
    //console.log(123);
    for (let face of geometry.faces) {
      const numberOfFaces = face instanceof THREE.Face3 ? 3 : 4;
      let i = 0;

      while (i < numberOfFaces) {
        face.vertexColors[i] = color;
        i++;
      }
    }
  }
};
