/*
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the
 * 2nd argument (also a string).
 *
 * Examples:
 *
 * solution('abc', 'bc') // returns true
 * solution('abc', 'd') // returns false
*/

// Test true:
let str1 = 'abcdef';
let end1 = 'ef';

// Test false:
let str2 = 'abcdef';
let end2 = 'zz';

// All browser support:
const solution = (string, ending) => {
  let endLen = -ending.length;
  let strEnd = string.slice(endLen);

  if (strEnd === ending) {
    return true
  }

  return false
}

// No IE9 support:
const checkStringEnd = (string, ending) => {
  return string.endsWith(ending);
}

// true:
console.log(solution(str1, end1));
console.log(checkStringEnd(str1, end1));


// false:
console.log(solution(str2, end2));
console.log(checkStringEnd(str2, end2));
