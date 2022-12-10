import {tick} from './clock.js'

function isFunction(obj) {
  return typeof obj === "function"
}

export function cpu({operations, pretick, postick}) {
  operations.forEach(operation => {
    operation()
    
    isFunction(pretick) && pretick()
    tick()
    isFunction(postick) && postick()
  })
}

