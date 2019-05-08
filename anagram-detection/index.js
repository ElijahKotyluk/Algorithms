var isAnagram = function(test, original) {
  let newTest = test.toLowerCase().split('').sort().join();
  let newOriginal = original.toLowerCase().split('').sort().join();

  if(newTest == newOriginal) {
    return true;
  } else return false;
}

console.log(isAnagram('tester', 'seTTre')); // return true
console.log(isAnagram('testr', 'tester'); // return false
