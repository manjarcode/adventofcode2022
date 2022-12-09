import { Coord } from "./coord.js"
import { Rope } from "./rope.js"

export function part2(moves) {
  const rope = new Rope([
    new Coord(0,0), 
    new Coord(0,0),
    new Coord(0,0),
    new Coord(0,0),
    new Coord(0,0),
    new Coord(0,0),
    new Coord(0,0),
    new Coord(0,0),
    new Coord(0,0),
    new Coord(0,0)
  ])

  moves.forEach(([direction, steps]) => {
    rope.move(direction, steps)
  });
  
  return rope.visited()  
}

