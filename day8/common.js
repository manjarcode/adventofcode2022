export function prepare(input) {
  const rows = input.split('\n')

  const matrix = rows.map(
    row => row.split('')
  )

  return matrix
}