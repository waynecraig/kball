import {
  SphereGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'

export function getBall(W, H) {
  const geometry = new SphereGeometry( H / 100, 100, 100 )
  const material = new MeshBasicMaterial( { color: 0xffff00 } )
  const sphere = new Mesh( geometry, material )
  return sphere
}
