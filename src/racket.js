import world from './world'
import {
  BoxBufferGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'
import { H, W } from './config'

const size = [ W / 10, 1, 10 ]

const geometry = new BoxBufferGeometry(size[0], size[1], size[2])
const material = new MeshBasicMaterial( { color: 0x00ffff } )
export const meshes = [ 1, -1 ].map(d => {
  const racket = new Mesh( geometry, material )
  racket.position.y = d * H * 3 / 8
  return racket
})
export const bodies = meshes.map(d => {
  return world.add({
    type: 'box',
    size,
    pos: [0, d.position.y, 0],
    move: true
  })
})
export const update = function() {
  meshes.map((m, i) => {
    m.position.copy( bodies[i].getPosition() )
    m.quaternion.copy( bodies[i].getQuaternion() )
  })
}
