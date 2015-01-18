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
  #
  # @usage @constructor
  paint: ->
    @_setupThreeJs()
    @_paintElements()
#    @render()

  ##
  # Sets up everything needed for three js to work
  #
  # @usage @paint
  _setupThreeJs: ->
    @_createScene()
    @_createCamera()
    @_createRenderer()

  ##
  # Creates a three js scene
  #
  # @usage @_setupThreeJs
  _createScene: ->
    @scene = new THREE.Scene()

  ##
  # Creates a three js camera
  #
  # @usage @_setupThreeJs
  _createCamera: ->
    @camera = new THREE.PerspectiveCamera(70, @container.offsetWidth / @container.offsetHeight, 1, 10000)

  ##
  # Creates a three js renderer
  #
  # @usage @_setupThreeJs
  _createRenderer: ->
    @renderer = new THREE.WebGLRenderer(
      antialias: true
    )
    @container.appendChild(@renderer.domElement)

  ##
  # Paints all scene elements
  #
  # @usage @paint
  _paintElements: ->
    throw new Error('_paintElements is not implemented')

  ##
  # Runs every frame and renders a result
  #
  # @usage @paint
  render: =>
    throw new Error('render is not implemented')
