// test case #1
const arr1 = [1, 1, 1, 1.2, 1, 1];
// test case #2
const arr2 = [0, 1, 1, 1, 1];
// test case #3
const arr3 = [.1, .1, .2, .1, .1];
// test case #4
const arr4 = [0, 0, 0, 0, 0, 100];

// function to find unique number in given array
findUniq = (arr) => {
    // define result variable
    let result;

    // 1st iteration through array
    for (let i = 0; i < arr.length; i++) {
        // 2nd iteration through array
        for (let j = i; j < arr.length; j++) {
            // compare 1st and 2nd loop index
            if (arr[i] != arr[j]) {
                // if not equal arr[1] is the result.
                result = arr[i];
            }
        }
    }
    // log result to console
    console.log(result);
    // return result
    return result;
}
findUniq(arr1)
findUniq(arr2)
findUniq(arr3)
findUniq(arr4)