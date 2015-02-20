##
# Turns on animated triangles
class app.effects.ThreeJs.Triangles extends app.effects.ThreeJs.Controllable
  ##
  # Prepares a scene by configuring controls, lights and a camera
  _prepareScene: ->
    @_adjustCamera()
    super

  ##
  # Prepares objects by drawing them
  _prepareObjects: ->
    super
    @_drawAll()

  ##
  # Moves camera a bit to the background
  _adjustCamera: ->
    @camera.position.z = 500

  ##
  # Adds all lights to a scene
  _addLights: ->
    super
    lightsPositions = [[0, 500, 2000], [5000, 0, 1000], [0, 1000, 500]]
    for position in lightsPositions
      light = new THREE.SpotLight(0xffffff, 0.75)
      light.position.set position[0], position[1], position[2]
      @scene.add light

  ##
  # Draws all objects
  _drawAll: ->
    geom = new THREE.BoxGeometry(1, 1, 1)
    color = new THREE.Color()
    matrix = new THREE.Matrix4()
    quaternion = new THREE.Quaternion()
    i = 0
    while i < 5000
      @_draw(i, geom, color, matrix, quaternion)
      i++

  ##
  # Draws a single object
  _draw: (i, geom, color, matrix, quaternion) ->
    position = @__getPosition()
    rotation = @__getRotation()
    scale = @__getScale()

    quaternion.setFromEuler rotation, false
    matrix.compose position, quaternion, scale

    @__setRandomColor(geom, color, matrix)

  ##
  # Gets a random position for an object
  __getPosition: ->
    position = new THREE.Vector3()
    position.x = Math.random() * 10000 - 5000
    position.y = Math.random() * 6000 - 3000
    position.z = Math.random() * 8000 - 4000
    position

  ##
  # Gets a random angle for an object
  __getRotation: ->
    rotation = new THREE.Euler()
    randomRotation = Math.random() * 2 * Math.PI
    rotation.x = randomRotation
    rotation.y = randomRotation
    rotation.z = randomRotation
    rotation

  ##
  # Gets a random scale for an object
  __getScale: ->
    scale = new THREE.Vector3()
    randomAngle = Math.random() * 200 + 100
    scale.x = randomAngle
    scale.y = randomAngle
    scale.z = randomAngle
    scale

  ##
  # Sets a random color for every object
  __setRandomColor: (geom, color, matrix) ->
    @_applyVertexColors geom, color.setHex(Math.random() * 0xffffff)
    @geometry.merge geom, matrix

  ##
  # Creates a random color for every object
  _applyVertexColors: (g, c) ->
    g.faces.forEach (f) ->
      n = (if (f instanceof THREE.Face3) then 3 else 4)
      j = 0

      while j < n
        f.vertexColors[j] = c
        j++
