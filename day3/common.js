
export function priority(item) {
  const prio = '>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return prio.indexOf(item)
}

export function sum(array) {
  return array.reduce((acum, current) => acum + current, 0)
}