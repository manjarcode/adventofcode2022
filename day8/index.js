import { textMatrix } from './input.example.js'

import {prepare} from './common.js'
import {part1} from './part1.js'

const matrix = prepare(textMatrix)

console.log(matrix)
console.log(part1(matrix))