import {register} from './register.js'
import {sum} from '../common/index.js'
import {cycle} from './clock.js'
import {cpu} from './cpu.js'

const strengths = []

function storeSignal()  {

  const isPeriod = cycle % 40 == 20

  if (isPeriod) {
    const strength = cycle*register
    strengths.push(strength)
  }
}

export function part1(operations) {
  cpu({operations, postick: storeSignal})
  const total = sum(strengths)
  return total
}