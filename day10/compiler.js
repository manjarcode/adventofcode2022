import {add} from './register.js'
import {readFileIterator} from '../common/fileManagement.js'

function addX1() {} 

function addX2(input) {
  const value = Number(input)
  add(value)
}

function noop() {}

export async function compile(file) {

  const operations = []
  await readFileIterator(file, line => {

    if (line.startsWith('addx')) {
      operations.push(...readAddx(line))
    }

    if (line.startsWith('noop')) {
      operations.push(noop)
    }
  })

  return operations
}

function readAddx(line) {
  const [, value] = line.split(' ')
  
  const curryAddX2 = () => {
    addX2(value)
  }

  return [addX1, curryAddX2]
}