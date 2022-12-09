import {readFileIterator} from "../common/index.js"

const STACK_TEXT_LENGTH = 4
let stacks = []
let instructionStrategy

function readLine(line) {
  const isInstruction = line.startsWith("move")

  isInstruction ? processInstruction(line) : readStackLine(line)
}

function ensureStacks(line) {
  const areStackReady = stacks.length > 0

  if (!areStackReady) {
    const totalStacks = (line.length +1) / STACK_TEXT_LENGTH
    for (let i =0; i<totalStacks; i++) {
      stacks.push([])
    }
  }
}

function readStackLine(line) {
  ensureStacks(line)
  const totalStacks = line.length / STACK_TEXT_LENGTH
  for (let i=0; i<totalStacks; i++) {
    const index = STACK_TEXT_LENGTH*i
    const prefix = line[index]
    const item = line[index+1]

    const isValid = prefix === '['
    isValid && stacks[i].push(item)
  }
}

function processInstruction(line) {
    const regex = /move (\d+) from (\d+) to (\d+)/
    const match = regex.exec(line)
    const many = Number(match[1])
    const from = Number(match[2]) - 1
    const to = Number(match[3]) - 1

    instructionStrategy(stacks, many, from, to)
}

function solution() {
  return stacks.map(arr => arr[0]).join('')
}

export async function execute(path, applyInstruction) {
  stacks = []
  instructionStrategy = applyInstruction
  await readFileIterator(path, readLine)
  return solution()
}


