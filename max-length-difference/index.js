const arrayA = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const arrayB = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

/** Function to return the difference between the maximum length of two arrays.
 * @param {Array} arrayB Array a.
 * @param {Array} arrayA Array b.
*/
const maxLenDiff = (arrayA, arrayB) => {

  // Check if both arguments have a length greater than 0.
  // if True, return -1.
  if(arrayA.length == 0 || arrayB.length == 0) {
    return -1;
  }

  // Map through both arrays to get the length of each string.
  let length1 = arrayA.map(w => w.length)
  let length2 = arrayB.map(w => w.length)

  // return the max between the two numbers left.
  return Math.max(

    // Subtract max number of length1 by the min number of length2.
    Math.max(...length1) - Math.min(...length2),

    // Subtract max number of length2 by the min number of length1.
    Math.max(...length2) - Math.min(...length1)
  )
};

console.log(maxLenDiff(arrayA, arrayB));
