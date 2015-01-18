##
# Turns on animated triangles
#
# @usage footer view
class app.effects.ThreeJs.Triangles extends app.effects.ThreeJs
  @cube: null

  ##
  # Paints all scene elements
  #
  # @usage @paint
  _paintElements: ->
#    @_renderBackground()
    @_renderCube()
    @_renderLights()


#  _renderBackground: ->
#    skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000)
#    skyboxMaterial = new THREE.MeshBasicMaterial(
#      color: 0x000000
#      side: THREE.BackSide
#    )
#    skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial)
#    @scene.add skybox


  _renderCube: ->
    geometry = new THREE.BoxGeometry(100, 100, 100)
    material = new THREE.MeshLambertMaterial(
      color: 0x1ec876
    )
    @cube = new THREE.Mesh(geometry, material)
    @cube.rotation.y = Math.PI * 45 / 180;
    @scene.add @cube

    @camera.position.y = 160
    @camera.position.z = 400
    @camera.lookAt @cube.position
    @clock = new THREE.Clock


  _renderLights: ->
    pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(0, 300, 200)

    @renderer.setClearColor(0xffffff, 1)

    @scene.add(pointLight)

  ##
  # Runs every frame and renders a result
  #
  # @usage @paint
  render: =>
#    @cube.rotation.x += 0.1
#    @cube.rotation.y += 0.1
    @renderer.render(@scene, @camera)

    @_updateFrameContent()

    requestAnimationFrame(@render)

  ##
  # Does the actual drawing inside each frame
  _updateFrameContent: ->
    @cube.rotation.y -= @clock.getDelta()

