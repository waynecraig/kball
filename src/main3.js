import {
  World,
  Circle,
  Box,
  Body
} from 'p2'

const W = window.innerWidth
const H = window.innerHeight

document.body.style.margin = '0'

const world = new World({
  gravity: [0, 0]
})

const body = new Body({
  mass: 1,
  position: [0, 0]
})

body.addShape(new Circle({ radius: H / 100 }))

world.addBody(body)

import { 
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'

const scene = new Scene()
const camera = new OrthographicCamera(W / -2, W / 2, H / 2, H / -2, 1, 100)
camera.position.z = 50

const geometry = new SphereGeometry( H / 100,  100, 100 )
const material = new MeshBasicMaterial( { color: 0xffff00 } )
const sphere = new Mesh( geometry, material )

scene.add(sphere)

const renderer = new WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var fixedDeltaTime = 1 / 60
function update() {
  world.step(fixedDeltaTime)
  sphere.position.x = body.position[0]
  sphere.position.y = body.position[1]
}

function animate() {
  update()
	renderer.render( scene, camera )
	requestAnimationFrame( animate )
}
animate(Date.now())
