##
# Basic class for threejs based effects
class app.effects.ThreeJs
  scene: null
  camera: null
  container: null

  constructor: (@container) ->
    @paint()

  ##
  # Does the painting of everything
  paint: ->
    @_setupThreeJs()
    @_paintEverything()

  ##
  # Sets up everything needed for three js to work
  _setupThreeJs: ->
    @_createScene()
    @_createCamera()
    @_createRenderer()

  ##
  # Creates a three js scene
  _createScene: ->
    @scene = new THREE.Scene()

  ##
  # Creates a three js camera
  _createCamera: ->
    @camera = new THREE.PerspectiveCamera(70, @container.offsetWidth / @container.offsetHeight, 1, 10000)

  ##
  # Creates a three js renderer
  _createRenderer: ->
    @renderer = new THREE.WebGLRenderer(
      antialias: true
    )
    @container.appendChild(@renderer.domElement)

  ##
  # Paints all scene elements
  _paintEverything: ->
    @_prepareScene()
    @_prepareObjects()
    @_animateObjects()

  ##
  # Prepares a scene by configuring controls, lights and a camera
  _prepareScene: ->
    @_addLights()
    @_updateRenderer()

  ##
  # Prepares objects by drawing them
  _prepareObjects: ->
    @_createGeometries()
    @_createMaterials()

  ##
  # Turns drawn objects to life on first rendering
  _animateObjects: ->
    @_addDrawnObject()
    @animate()

  ##
  # Adds all lights to a scene
  _addLights: ->
    @scene.add new THREE.AmbientLight(0x404040)

  ##
  # Creates a shared geometry
  _createGeometries: ->
    @geometry = new THREE.Geometry()

  ##
  # Creates a shared material
  _createMaterials: ->
    @defaultMaterial = new THREE.MeshLambertMaterial(
      color: 0xffffff
      shading: THREE.FlatShading
      vertexColors: THREE.VertexColors
    )

  ##
  # Adds a drawn object to a scene
  _addDrawnObject: ->
    drawnObject = new THREE.Mesh(@geometry, @defaultMaterial)
    @scene.add drawnObject

  ##
  # Configures renderer
  _updateRenderer: ->
    @renderer.setClearColor 0xffffff
    @renderer.setPixelRatio window.devicePixelRatio
    @renderer.setSize @container.offsetWidth, @container.offsetHeight
    @renderer.sortObjects = false

  ##
  # Turns on animation
  animate: =>
    requestAnimationFrame @animate
    @render()

  ##
  # Runs every frame and renders a result
  render: ->
    @renderer.render(@scene, @camera)
