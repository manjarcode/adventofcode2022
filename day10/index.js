import {part1} from './part1.js'
import {part2} from './part2.js'

import {compile} from './compiler.js'
import {restart} from './restart.js'


const operations = await compile('./day10/input/part1.txt')

console.log(part1(operations))
restart()
console.log(part2(operations))