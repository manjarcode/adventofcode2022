function fullContained(section1, section2) {
  return isContained(section1, section2) || isContained(section2, section1)
} 

function isContained(section1, section2) {
  return section1.from <= section2.from 
    && section1.to >= section2.to
}

export function part1(input) {
  return input.map(
    ([section1, section2]) => 
      fullContained(section1, section2) ? 1 : 0
    ).reduce((acum, current)=>acum + current)
}

