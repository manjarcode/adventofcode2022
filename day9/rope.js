export class Rope {
  constructor(knots) {
    this._knots = knots
    this._visited = {'[0,0]': true}
  }

  move(direction, steps) {
    for (let i=0; i<steps; i++) {      
      this._moveKnots(direction)
      this._updateVisited()
    }
  }

  _moveKnots(direction) {
    this._moveOne(this._knots[0], direction) 

    for (let i = 1; i< this._knots.length; i++)
    {
      const reference = this._knots[i-1]
      const follower = this._knots[i]

      const next = follower.next(reference)

      this._knots[i] = next
    }
  }

  _moveOne(knot, direction) {
    if (direction === 'L') {
      knot.left()
    } else if (direction === 'R') {
      knot.right()
    } else if (direction === 'U') {
      knot.up()
    } else if (direction === 'D') {
      knot.down()
    }
  }

  _updateVisited() {       
    const visitedKey = this._tail()
    this._visited[visitedKey] = true
  }

  _tail() {
    return this._knots[this._knots.length-1].toString()
  }

  visited() {
    const keys = Object.keys(this._visited)
    return keys.length
  }
}