import { 
  Scene, 
  OrthographicCamera,
  WebGLRenderer
} from 'three'
import { getGrounds } from './ground'
import { getBall } from './ball'
import { getRackets } from './racket'

document.body.style.margin = '0'

const H = 100
const W = H * window.innerWidth / window.innerHeight

const scene = new Scene()
const camera = new OrthographicCamera(W / -2, W / 2, H / 2, H / -2, 1, 1000)
camera.position.z = 500

const grounds = getGrounds(W, H)
scene.add(grounds)

const ball = getBall(W, H)
scene.add(ball)

const rackets = getRackets(W, H)
rackets.map(d => scene.add(d))

const renderer = new WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

function animate() {
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
}
animate()
