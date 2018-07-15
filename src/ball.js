import {
  CylinderGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'
imort {
  CylinderMesh
} from 'physijs'

export function getBall(W, H) {
  const geometry = new CylinderGeometry( H / 100, H / 100,  1, 100 )
  const material = new MeshBasicMaterial( { color: 0xffff00 } )
  const cylinder = new Mesh( geometry, material )
  return sphere
}
