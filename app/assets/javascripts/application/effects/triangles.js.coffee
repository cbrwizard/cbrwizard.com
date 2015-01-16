##
# Turns on animated triangles
#
# @usage footer view
class app.effects.Triangles
  @scene: null
  @camera: null
  @container: null

  constructor: (@container) ->
    @paint()

  ##
  # Does the painting of everything
  #
  # @usage @constructor
  paint: ->
    console.log 'painting...'
    @_setupThreeJs()
    @_paintElements()
    @render()

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
    @camera = new THREE.PerspectiveCamera(75, @container.offsetWidth / @container.offsetHeight, 0.1, 1000)

  ##
  # Creates a three js renderer
  #
  # @usage @_setupThreeJs
  _createRenderer: ->
    @renderer = new THREE.WebGLRenderer()
    @container.appendChild(@renderer.domElement)

  ##
  # Paints all scene elements
  #
  # @usage @paint
  _paintElements: ->
    geometry = new THREE.BoxGeometry(1, 1, 1)
    material = new THREE.MeshBasicMaterial(color: 0x00ff00)
    @cube = new THREE.Mesh(geometry, material)
    @scene.add @cube
    @camera.position.z = 5

  ##
  # Runs every frame and renders a result
  #
  # @usage @paint
  render: =>
    requestAnimationFrame(@render)
    @cube.rotation.x += 0.1
    @cube.rotation.y += 0.1
    @renderer.render(@scene, @camera)
