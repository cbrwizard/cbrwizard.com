##
# A base class for a controllable three js effect
class app.effects.ThreeJs.Controllable extends app.effects.ThreeJs
  controls: null
  geometry: null
  defaultMaterial: null

  ##
  # Prepares a scene by configuring controls, lights and a camera
  _prepareScene: ->
    @_createControls()
    super

  ##
  # Sets up controls which allow camera to be moved
  _createControls: ->
    @controls = new THREE.TrackballControls(@camera, @container)
    @controls.rotateSpeed = 1.0
    @controls.zoomSpeed = 5
    @controls.panSpeed = 5
    @controls.noZoom = false
    @controls.noPan = false
    @controls.staticMoving = true
    @controls.dynamicDampingFactor = 0.3
    @controls.maxDistance = 1500

  ##
  # Runs every frame with updated controls and renders a result
  render: ->
    @controls.update()
    super
