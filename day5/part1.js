import {execute} from './common.js'

function applyInstruction(stacks, many,from,to) {
  const sourceStack = stacks[from]
  const targetStack = stacks[to]
  for (let i=0;i<many;i++) {
    const item = sourceStack.shift()    
    targetStack.unshift(item)    
  }
}

export async function part1() {
  const path = './day5/input.txt'
  return await execute(path, applyInstruction)
}
