##
# Turns on animated triangles
#
# @usage footer view
# todo: follow this http://benchung.com/smooth-mouse-rotation-three-js/
class app.effects.ThreeJs.Triangles extends app.effects.ThreeJs
  controls: null
  pickingScene: null
  pickingTexture: null
  scene: null
  light: null
  geometry: null
  pickingGeometry: null
  pickingMaterial: null
  defaultMaterial: null
  pickingData: []
  objects: []
  mouse: null
  highlightBox: null
  stats: null
  offset: new THREE.Vector3(10, 10, 10)

  ##
  # Paints all scene elements
  #
  # @usage @paint
  _paintElements: ->
    @_adjustCamera()
    @_createControls()
#    @_addPickingTexture()
    @_addLights()
    @_createGeometries()
    @_createMaterials()
    @_drawAll()
    @_addDrawnObject()
#    @_addPickingScene()
#    @_addHighlightBox()
    @_updateRenderer()
#    @_showStats()
    @_listenToMouse()

    @mouse = new THREE.Vector2(0, 0
    )

    @animate()

  _adjustCamera: ->
    @camera.position.z = 1000

  _createControls: ->
    @controls = new THREE.TrackballControls(@camera)
    @controls.rotateSpeed = 1.0
    @controls.zoomSpeed = 1.2
    @controls.panSpeed = 0.8
    @controls.noZoom = false
    @controls.noPan = false
    @controls.staticMoving = true
    @controls.dynamicDampingFactor = 0.3

  _addLights: ->
    @scene.add new THREE.AmbientLight(0x555555)
    @light = new THREE.SpotLight(0xffffff, 1.5)
    @light.position.set 0, 500, 2000
    @scene.add @light

  _createGeometries: ->
    @geometry = new THREE.Geometry()
    @pickingGeometry = new THREE.Geometry()

  _createMaterials: ->
    #    @pickingMaterial = new THREE.MeshBasicMaterial(vertexColors: THREE.VertexColors)
    @defaultMaterial = new THREE.MeshLambertMaterial(
      color: 0xffffff
      shading: THREE.FlatShading
      vertexColors: THREE.VertexColors
    )

  _drawAll: ->
    geom = new THREE.BoxGeometry(1, 1, 1)
    color = new THREE.Color()
    matrix = new THREE.Matrix4()
    quaternion = new THREE.Quaternion()
    i = 0
    while i < 5000
      @_draw(i, geom, color, matrix, quaternion)
      i++

  _addDrawnObject: ->
    drawnObject = new THREE.Mesh(@geometry, @defaultMaterial)
    @scene.add drawnObject

  _updateRenderer: ->
    @renderer.setClearColor 0xffffff
    @renderer.setPixelRatio window.devicePixelRatio
    @renderer.setSize @container.offsetWidth, @container.offsetHeight
    @renderer.sortObjects = false

  _listenToMouse: ->
    @renderer.domElement.addEventListener "mousemove", @onMouseMove

  ##
  # Runs every frame and renders a result
  #
  # @usage @paint
  render: ->
    @controls.update()
    #    @pick()
    @renderer.render(@scene, @camera)


  animate: =>
    requestAnimationFrame @animate
    @render()
  #    @stats.update()


  onMouseMove: (e) =>
    @mouse.x = e.clientX
    @mouse.y = e.clientY

  ## todo: create an object
  _draw: (i, geom, color, matrix, quaternion) ->
    position = @__getPosition()
    rotation = @__getRotation()
    scale = @__getScale()

    quaternion.setFromEuler rotation, false
    matrix.compose position, quaternion, scale

    @__setRandomColor(geom, color, matrix)
  #    @__setPickingColor(i, geom, color, matrix)
  #
  #    @__updatePickingData(i, position, rotation, scale)

  __getPosition: ->
    position = new THREE.Vector3()
    position.x = Math.random() * 10000 - 5000
    position.y = Math.random() * 6000 - 3000
    position.z = Math.random() * 8000 - 4000
    position

  __getRotation: ->
    rotation = new THREE.Euler()
    rotation.x = Math.random() * 2 * Math.PI
    rotation.y = Math.random() * 2 * Math.PI
    rotation.z = Math.random() * 2 * Math.PI
    rotation

  __getScale: ->
    scale = new THREE.Vector3()
    scale.x = Math.random() * 200 + 100
    scale.y = Math.random() * 200 + 100
    scale.z = Math.random() * 200 + 100
    scale

  __setRandomColor: (geom, color, matrix) ->
    # give the geom's vertices a random color, to be displayed
    @_applyVertexColors geom, color.setHex(Math.random() * 0xffffff)
    @geometry.merge geom, matrix

  ##
  # ??
  #
  # @usage init
  _applyVertexColors: (g, c) ->
    g.faces.forEach (f) ->
      n = (if (f instanceof THREE.Face3) then 3 else 4)
      j = 0

      while j < n
        f.vertexColors[j] = c
        j++




#
#  pick: =>
#    #render the picking scene off-screen
#    @renderer.render @pickingScene, @camera, @pickingTexture
#    gl = @renderer.getContext()
#
#    #read the pixel under the mouse from the texture
#    pixelBuffer = new Uint8Array(4)
#    gl.readPixels @mouse.x, @pickingTexture.height - @mouse.y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixelBuffer
#
#    #interpret the pixel as an ID
#    id = (pixelBuffer[0] << 16) | (pixelBuffer[1] << 8) | (pixelBuffer[2])
#    data = @pickingData[id]
#    if data
#
#      #move our highlightBox so that it surrounds the picked object
#      if data.position and data.rotation and data.scale
#        @highlightBox.position.copy data.position
#        @highlightBox.rotation.copy data.rotation
#        @highlightBox.scale.copy(data.scale).add @offset
#        @highlightBox.visible = true
#    else
#      @highlightBox.visible = false


#
#  _showStats: ->
#    @stats = new Stats()
#    @stats.domElement.style.position = "absolute"
#    @stats.domElement.style.bottom = "0px"
#    @stats.domElement.style.right = "0px"
#    @container.appendChild @stats.domElement




#  _addHighlightBox: ->
#    @highlightBox = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial(color: 0xffff00))
#    @scene.add @highlightBox

#  _addPickingScene: ->
#    @pickingScene = new THREE.Scene()
#    @pickingScene.add new THREE.Mesh(@pickingGeometry, @pickingMaterial)






#  __setPickingColor: (i, geom, color, matrix) ->
#    # give the geom's vertices a color corresponding to the "id"
#    @_applyVertexColors geom, color.setHex(i)
#    @pickingGeometry.merge geom, matrix

#  __updatePickingData: (i, position, rotation, scale) ->
#    @pickingData[i] =
#      position: position
#      rotation: rotation
#      scale: scale



#  _addPickingTexture: ->
#    @pickingTexture = new THREE.WebGLRenderTarget(@container.offsetWidth, @container.offsetHeight)
#    @pickingTexture.generateMipmaps = false



