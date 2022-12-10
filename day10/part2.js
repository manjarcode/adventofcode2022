import {register} from './register.js'
import {cycle} from './clock.js'
import {cpu} from './cpu.js'

let output = ''
let row = ''

function paint() {
 
  const drawingPixel = cycle % 40

  const isSpriteInPlace = register == drawingPixel 
    || register+1 == drawingPixel
    || register-1 == drawingPixel

  const pixel = isSpriteInPlace ? '#' : '.'

  row += pixel

  const mustDrawRow = cycle % 40 == 0

  if (mustDrawRow) {
    output += row + '\n'
    row = ''
  }
}

export function part2(operations) {
  cpu({operations, pretick: paint})

  return output
}