import {
  BoxBufferGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'

export function getRackets(W, H) {
  const geometry = new BoxBufferGeometry( W / 10, 1, 10)
  const material = new MeshBasicMaterial( { color: 0x00ffff } )
  return [ 1, -1 ].map(d => {
    const racket = new Mesh( geometry, material )
    racket.position.y = d * H * 3 / 8
    return racket
  })
}
