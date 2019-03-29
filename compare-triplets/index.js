/* Compare both students scores =>
 * if studentA[i] > studentB[i], studentA++
 * if studentA[i] < studentB[i], studentB++
*/

const studentA = [3, 5, 9],
      studentB = [6, 5, 8];

const compareTriplets = (a, b) => {
  let countA = 0,
      countB = 0;

  for(let i = 0; i < a.length; i++) {
    
    if(a[i] > b[i]) {
      countA++;
    }

    if(a[i] < b[i]) {
      countB++;
    }
  }

  return [countA, countB];
}

console.log(compareTriplets(studentA, studentB)); // [1, 1]

const alex = [67, 88, 94, 99, 100],
      bob = [67, 92, 77, 100, 100];

console.log(compareTriplets(alex, bob)); // [1, 2]
