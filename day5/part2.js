import {execute} from './common.js'

function applyInstruction(stacks, many,from,to) {
  const sourceStack = stacks[from]
  const targetStack = stacks[to]
  const temp = []
  for (let i=0;i<many;i++) {
    const item = sourceStack.shift()
    temp.push(item)
  }

  targetStack.unshift(...temp)
}

export async function part2() {
  const path = './day5/input.txt'
  return await execute(path, applyInstruction)
}
