import {reset as resetRegister} from './register.js'
import {reset as resetClock} from './clock.js'

export function restart() {
  resetRegister()
  resetClock()
}