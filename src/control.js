import { H, W } from './config'

const bound = (min, max) => d => Math.min(Math.max(d, min), max)
const boundX = bound(-W / 2, W / 2)
const boundY = bound(-H / 2, -H / 4)

function moveRacket(racket, dx, dy) {
  racket.position.x = boundX(racket.position.x + dx)
  racket.position.y = boundY(racket.position.y + dy)
}

export function enableControl(racket, dom) {

  const STATE = { NONE: 0, MOVE: 1, ROTATE: 2 }
  const delta = H / window.innerHeight

  let state =  STATE.NONE
  let lastX = 0
  let lastY = 0

  const handleTouch = handle => e => {
    e.preventDefault()
    e.stopPropagation()
    const touches = e.touches
    racket && touches && handle(touches)
  }

  dom.addEventListener('touchstart', handleTouch(touches => {
    switch(touches.length) {
      case 1:
        if (state == STATE.NONE) {
          state = STATE.MOVE
          lastX = touches[0].clientX
          lastY = touches[0].clientY
        }
        break;
      case 2:
        state = STATE.ROTATE
        break;
      default:
        break;
    }
  }))

  dom.addEventListener('touchmove', handleTouch(touches => {
    switch(touches.length) {
      case 1:
        const x = touches[0].clientX
        const y = touches[0].clientY
        moveRacket(racket, (x - lastX) * delta, -(y - lastY) * delta)
        lastX = x
        lastY = y
        break;
      case 2:
        break;
      default:
        break;
    }
  }))

  dom.addEventListener('touchend', handleTouch(touches => {
    switch(touches.length) {
      case 0:
        state = STATE.NONE
        break;
      case 1:
        state = STATE.ROTATE
        break;
      case 2:
        break;
      default:
        break;
    }
  }))

}
