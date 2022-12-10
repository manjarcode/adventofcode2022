const INITIAL_REGISTER_VALUE = 1

export let register = INITIAL_REGISTER_VALUE

export function add(value) {
  register += value
}

export function reset() {
  register = INITIAL_REGISTER_VALUE
}