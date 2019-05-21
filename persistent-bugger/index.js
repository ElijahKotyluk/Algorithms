function persistence(num) {

  // Count number of loops
  let count = 0

  // if length of num is great than one
  while (String(num).length > 1) {
    count++

    // split number string
    strNumArr = String(num).split('')

    //  reduce strNumArr and multiply each integer
    num = strNumArr.reduce((prev, curr, i, arr) => {
      return parseInt(prev) * parseInt(curr)
    })
  }

  // return count total 
  return count
}

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
