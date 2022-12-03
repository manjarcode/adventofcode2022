import {priority, sum} from './common.js'

function prepare(input) {
  const {blocks} = input.reduce(
    function ({blocks, current}, item) {
      current.push(item)

      if (current.length === 3) {
        blocks.push(current)
        current=[]
      }

      return {blocks, current}
    }, { blocks: [], current: []})
  return blocks
}

function findTag (block) {
  const [first, second, third] = block

  const tag = first.split('').find(letter => {
     return second.includes(letter) 
      && third.includes(letter)
  })

  return tag
}

export function part2(input) {
  const blocks = prepare(input)

  const priorities = blocks.map(block => {
      const tag = findTag(block)
      return priority(tag)
  })

  return sum(priorities)
}