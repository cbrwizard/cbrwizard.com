//
// Basic class for threejs based effects
class ThreeJsEffect {
  constructor(container) {
    this.scene = null;
    this.camera = null;
    this.geometry = null;
    this.defaultMaterial = null;
    this.container = container;
    this._setupThreeJs();
  }

  //
  // Animates a frame
  animate() {
    requestAnimationFrame(() => {
      this.animate();
    });
    this.render();
  }

  //
  // Runs every frame and renders a new scene
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  //
  // Sets up everything needed for three js to work
  _setupThreeJs() {
    this._createScene();
    this._createCamera();
    this._createRenderer();
  }

  //
  // Creates a three js scene
  _createScene() {
    this.scene = new THREE.Scene();
  }

  //
  // Creates a three js camera
  _createCamera() {
    this.camera = new THREE.PerspectiveCamera(70, this.container.offsetWidth / this.container.offsetHeight, 1, 10000);
  }

  //
  // Creates a three js renderer
  _createRenderer() {
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.container.appendChild(this.renderer.domElement);
  }

  //
  // Paints all scene elements
  _paintEverything() {
    this._prepareScene();
    this._prepareObjects();
    this._animateObjects();
  }

  //
  // Prepares a scene by configuring controls, lights and a camera
  _prepareScene() {
    this._addLights();
    this._updateRenderer();
  }

  //
  // Prepares objects by drawing them
  _prepareObjects() {
    this._createGeometries();
    this._createMaterials();
  }

  //
  // Turns drawn objects to life on first rendering
  _animateObjects() {
    this._addDrawnObject();
    this.animate();
  }

  //
  // Adds all lights to a scene
  _addLights() {
    this.scene.add(
      new THREE.AmbientLight(0x404040)
    );
  }

  //
  // Creates a geometry
  _createGeometries() {
    this.geometry = new THREE.Geometry();
  }

  //
  // Creates a material
  _createMaterials() {
    this.defaultMaterial = new THREE.MeshLambertMaterial(
      {
        color: 0xffffff,
        shading: THREE.FlatShading,
        vertexColors: THREE.VertexColors
      }
    );
  }

  //
  // Adds a preconfigured drawn object to a scene
  _addDrawnObject() {
    var drawnObject = new THREE.Mesh(this.geometry, this.defaultMaterial);
    this.scene.add(drawnObject);
  }

  //
  // Configures renderer
  _updateRenderer() {
    this.renderer.setClearColor(0xffffff);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.renderer.sortObjects = false;
  }
}

module.exports = ThreeJsEffect;