function splitHalf(input) {
  const length = input.length
  const lengthHalf = length / 2
  const first = input.substring(0, lengthHalf)
  const second = input.substring(lengthHalf, length)

  return {first, second}
}

function checkRepeats({first, second}) {
  const repeated = first.split('').find(item => {
    return second.includes(item)
  })

  return repeated
}


function priority(item) {
  const prio = '>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return prio.indexOf(item)
}

export function part1(input) {
  const repeated = input.map(line => {
    const {first, second} = splitHalf(line)
    const item =  checkRepeats({first, second})
    return priority(item)
  })

  const result = repeated.reduce((acum, current) => acum + current, 0)

  return result
}

