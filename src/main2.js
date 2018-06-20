import {
  Engine,
  Render,
  World,
  Bodies
} from 'matter-js'

const engine = Engine.create();

const render = Render.create({
  element: document.body,
  engine: engine
});

const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

engine.world.gravity.y = 0
World.add(engine.world, [boxA, boxB, ground]);

Engine.run(engine);

Render.run(render);
