/*
    Complete the solution so that the function will break up camel casing, using a space between words.

    Example:
    solution('camelCasing') // => should return 'camel Casing'
*/

// complete the function
function solution(string) {
  
  // Split string @capital letters
  return string.split(/(?=[A-Z])/).join(' ')
}

console.log(solution('camelCasing')) // => 'camel Casing'
console.log(solution('myCamelCasedParam')) // => 'my Camel Cased Param'
