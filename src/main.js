import world from './world'
import { 
  Scene,
  OrthographicCamera,
  WebGLRenderer
} from 'three'
import { H, W } from './config'
import * as ground from './ground'
import { getBall } from './ball'
import * as racket from './racket'

document.body.style.margin = '0'

const scene = new Scene()
const camera = new OrthographicCamera(W / -2, W / 2, H / 2, H / -2, 1, 1000)
camera.position.z = 500

scene.add(ground.mesh)

const ball = getBall(W, H)
scene.add(ball)

racket.meshes.map(d => scene.add(d))

const renderer = new WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

function animate() {
  world.step()
  racket.update()
	renderer.render( scene, camera )
	requestAnimationFrame( animate )
}
animate()
