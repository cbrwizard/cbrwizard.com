var ControllableEffect = require('./controllable_effect');

//
// Turns on animated triangles
class TrianglesEffect extends ControllableEffect {
  //
  // Prepares a scene by configuring controls, lights and a camera
  _prepareScene() {
    this._adjustCamera();
    super._prepareScene();
  }

  //
  // Prepares objects by drawing them
  _prepareObjects() {
    super._prepareObjects();
    this._drawAll();
  }

  //
  // Moves camera a bit to the background
  _adjustCamera() {
    this.camera.position.z = 500;
  }

  //
  // Adds all lights to a scene
  _addLights() {
    super._addLights();
    var lightsPositions = [[0, 500, 2000], [5000, 0, 1000], [0, 1000, 500]];
    for (var position of lightsPositions) {
      var light = new THREE.SpotLight(0xffffff, 0.75);
      light.position.set(position[0], position[1], position[2]);
      this.scene.add(light);
    }
  }

  //
  // Draws all objects
  _drawAll() {
    var geom = new THREE.BoxGeometry(1, 1, 1);
    var color = new THREE.Color();
    var matrix = new THREE.Matrix4();
    var quaternion = new THREE.Quaternion();
    var i = 0;
    while(i < 5000) {
      this._draw(geom, color, matrix, quaternion);
      i++;
    }
  }

  //
  // Draws a single object
  //
  // @param
  _draw(geom, color, matrix, quaternion) {
    var position = this.__getPosition();
    var rotation = this.__getRotation();
    var scale = this.__getScale();

    quaternion.setFromEuler(rotation, false);
    matrix.compose(position, quaternion, scale);

    this.__setRandomColor(geom, color, matrix);
  }

  //
  // Gets a random position for an object
  //
  // @todo convert to a getter
  __getPosition() {
    var position = new THREE.Vector3();
    position.x = Math.random() * 10000 - 5000;
    position.y = Math.random() * 6000 - 3000;
    position.z = Math.random() * 8000 - 4000;
    return position;
  }

  //
  // Gets a random angle for an object
  //
  // @todo convert to a getter
  __getRotation() {
    var rotation = new THREE.Euler();
    var randomRotation = Math.random() * 2 * Math.PI;
    rotation.x = randomRotation;
    rotation.y = randomRotation;
    rotation.z = randomRotation;
    return rotation;
  }

  //
  // Gets a random scale for an object
  //
  // @todo convert to a getter
  __getScale() {
    var scale = new THREE.Vector3();
    var randomAngle = Math.random() * 200 + 100;
    scale.x = randomAngle;
    scale.y = randomAngle;
    scale.z = randomAngle;
    return scale;
  }

  //
  // Sets a random color for every object
  __setRandomColor(geom, color, matrix) {
    this._applyVertexColors(geom, color.setHex(Math.random() * 0xffffff));
    this.geometry.merge(geom, matrix);
  }

  //
  // Creates a random color for every object
  _applyVertexColors(g, c) {
    //debugger
    for (var f of g.faces) {
      var n = f instanceof THREE.Face3 ? 3 : 4;
      var j = 0;

      while(j < n) {
        //debugger;
        f.vertexColors[j] = c;
        j++;
      }
    }

  }
}

module.exports = TrianglesEffect;