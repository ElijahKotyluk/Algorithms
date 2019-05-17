Array.prototype.square = function() {
  // Result array:
  let result = []

  // Multiply each digit in the array by itself
  this.map((num) => {
    result.push(num*num) // Math.pow(num, 2)
  })

  return result
}

Array.prototype.cube = function() {
  // Result array:
  let result = []

  // Multiple each num by **3
  this.map((num) => {
    result.push(num**3) // Math.pow(num, 3)
  })

  return result
}

Array.prototype.sum = function() {
  let result = 0

  this.map((num) => {
    result += num
  })

  return result
}

Array.prototype.average = function() {
  let avg = 0
  let result = 0

  this.map((num) => {
    result += num
    avg++
  })

  return result/avg
}

Array.prototype.even = function() {
  let result = []

  this.map((num) => {
    if(num % 2 == 0) {
      result.push(num)
    }
  })

  return result
}

Array.prototype.odd = function() {
  let result = []

  this.map((num) => {
    if(num % 2 != 0) {
      result.push(num)
    }
  })

  return result
}

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.square()); // => [1, 4, 9, 16, 25]
console.log(numbers.cube()); // => [1, 8, 27, 64, 125]
console.log(numbers.sum()); // => 15, 'Wrong sum'
console.log(numbers.average()); // => 3, 'Wrong average'
console.log(numbers.even()); // => [2, 4] 'Wrong result for even()'
console.log(numbers.odd()); // => [1, 3, 5], 'Wrong result for odd()'
