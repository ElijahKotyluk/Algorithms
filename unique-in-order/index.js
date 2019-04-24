/*
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of
 * items without any elements with the same value next to each other and preserving the original
 * order of elements.
*/

const uniqueInOrder = (iterable) => {
  let array = [],
          i = 0;

  for(i = 0; i < iterable.length; i++) {
    if(iterable[i + 1] !== iterable[i]) {
      array.push(iterable[i])
    }
  }
  return array;
}

const test1 = 'AAAABBBCCDAABBB'; // ['A', 'B', 'C', 'D', 'A', 'B']
const test2 = 'ABBCcAD';         // ['A', 'B', 'C', 'c', 'A', 'D']
const test3 = [1, 1, 1, 2, 1, 55, 55, 5, 2, 10]; // [1, 2, 1, 55, 5, 2, 10]

console.log(uniqueInOrder(test1));
console.log(uniqueInOrder(test2));
console.log(uniqueInOrder(test3));
