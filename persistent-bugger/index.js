function persistence(num) {

  // Count number of loops
  let count = 0

  // first we get an array of digits
  // while length of digits is greater than 1
  while (String(num).length > 1) {
    count++

    strNumArr = String(num).split('')
    num = strNumArr.reduce((prev, curr, i, arr) => {
      return parseInt(prev) * parseInt(curr)
    })
  }

  return count
}

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
