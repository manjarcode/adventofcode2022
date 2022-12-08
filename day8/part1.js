function isVisible(matrix, x, y) {
  const top = Number(matrix[x][y-1])
  const left = Number(matrix[x-1][y])
  const bottom = Number(matrix[x][y+1])
  const right = Number(matrix[x+1][y])

  const height = Number(matrix[x][y])

  const visible =  top < height 
    || left < height 
    || bottom < height 
    || right<height

    console.log(x,y, visible)

  return visible
}

export function part1(matrix) {
  let countVisible = 0
  for (let i=1; i<matrix.length-1; i++) {
    for (let j=1; j<matrix.length-1; j++) {
      if (isVisible(matrix,i,j)) {
        countVisible++
      }
    }
  }

  return countVisible
}