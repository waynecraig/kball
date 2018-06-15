let currentRacket = null

export function enableContorl(racket) {
  currentRacket = racket
}

const STATE = { NONE: 0, MOVE: 1, ROTATE: 2 }

let state =  STATE.NONE

document.addEventListener('touchstart', e => {
})

document.addEventListener('touchmove', e => {
})

document.addEventListener('touchend', e => {
})
