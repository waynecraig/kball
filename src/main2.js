import {
  Engine,
  Render,
  World,
  Body,
  Bodies,
  Mouse,
  MouseConstraint,
  Events
} from 'matter-js'
import { enableControl } from './control'

const W = window.innerWidth
const H = window.innerHeight

document.body.style.margin = '0'

const engine = Engine.create()
const world = engine.world

world.gravity.y = 0
world.bounds.min.x = 0
world.bounds.min.y = 0
world.bounds.max.x = W
world.bounds.max.y = H

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: W,
    height: H,
    hasBounds: true
  }
});

const wall1 = Bodies.rectangle(W / 2, -500, W, 1000, {isStatic: true})
const wall2 = Bodies.rectangle(W / 2, H + 500, W, 1000, {isStatic: true})
const wall3 = Bodies.rectangle(-500, H / 2, 1000, H, {isStatic: true})
const wall4 = Bodies.rectangle(W + 500, H / 2, 1000, H, {isStatic: true})

const ball = Bodies.circle(100, 100, 5, 5)
ball.restitution = 1
ball.force = { x: 0.0035, y: 0.007 }
const racket = Bodies.rectangle(200, 230, 300, 90, {
  collisionFilter: {
    category: 0x0002
  },
  frictionAir: 0.1
})

World.add(world, [wall1, wall2, wall3, wall4, ball, racket]);

Engine.run(engine);

Render.run(render);

const bullets = {}

render.canvas.addEventListener('touchstart', e => {
  Array.prototype.map.call(e.touches, t => {
    if (!bullets[t.identify]) {
      const b = Bodies.circle(t.clientX, t.clientY, 5, 5)
      World.add(world, [ b ])
      bullets[t.identify] = b
    }
  })
})

render.canvas.addEventListener('touchmove', e => {
  Array.prototype.map.call(e.touches, t => {
    const b = bullets[t.identify]
    if (b) {
      b.force = {
        x: (t.clientX - b.position.x) / 1000,
        y: (t.clientY - b.position.y) / 1000
      }
      bullets[t.identify] = null
    }
  })
})

render.canvas.addEventListener('touchend', e => {
  Array.prototype.map.call(e.touches, t => {
  })
})

/*
// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        collisionFilter: {
          mask: 0x0002
        },
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

setTimeout(() => {
  //Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.004, y: 0.002 })
}, 5000)
*/
