const MAX_DISTANCE = Math.sqrt(2)

export class Coord {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  left() {
    this.x = this.x - 1
  }

  right() {
    this.x = this.x + 1
  }

  down() {
    this.y = this.y - 1
  }

  up() {
    this.y = this.y + 1
  }

  distance(coord) {
    const xComponent = Math.pow(this.x - coord.x, 2)
    const yComponent = Math.pow(this.y - coord.y, 2)

    return Math.sqrt(
      xComponent + yComponent
    )
  }

  clone() {
    return new Coord(this.x, this.y)
  }

  next(reference) {
    const mustMove = this.distance(reference)>MAX_DISTANCE
    return mustMove 
      ? this._getCloser(reference)
      : this
  }

  _getCloser(reference) {
    const xComponent = this._unitary(reference.x - this.x)
    const yComponent = this._unitary(reference.y - this.y)

    return new Coord(this.x + xComponent, this.y + yComponent)
  }

  _unitary(number) {
    if (number === 0) return 0
    return number / Math.abs(number)
  }

  toString() {
    return `[${this.x},${this.y}]`
  }
}
