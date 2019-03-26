// start at both ends, find the smaller difference. save as pattern for sequence. find missing val
const array = [1, 3, 4];

const findMissing = arr => {
    // const len = arr.length
    // let startVal = arr[1] - arr[0]
    // let endVal = arr[len - 1] - arr[len - 2]
    // let val
    //   take the smallest value if different
    //   use value to loop through array from beignning. return value if not detected in loop
    if (startVal < endVal) {
        val = startVal
    } else if (endVal < startVal) {
        val = endVal
    } else {
        val = startVal
    }

    let i = 0
    while (i < arr.length) {
        let n = arr[i] + val
        if (n === arr[i + 1]) {
            i++
        } else {
            return n
        }
    }
}


console.log(findMissing(array))
