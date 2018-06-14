import { 
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  Group
} from 'three'

export function getGrounds(W, H) {
  const sideGeometry = new PlaneGeometry(W, H / 4)
  const centerGeometry = new PlaneGeometry(W, H / 2)
  const sideMaterial = new MeshBasicMaterial( { color: 0x009900 } )
  const centerMaterial = new MeshBasicMaterial( { color: 0x990000 } )
  const planes = [
    new Mesh( sideGeometry, sideMaterial ),
    new Mesh( centerGeometry, centerMaterial ),
    new Mesh( sideGeometry, sideMaterial )
  ]
  planes[0].position.y = H * 3 / 8
  planes[2].position.y = -H * 3 / 8
  const group = new Group()
  planes.map(d => group.add(d))
  return group
}
