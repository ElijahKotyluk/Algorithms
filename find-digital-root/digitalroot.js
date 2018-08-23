// Find digital root
// given integer, add each value of integer, if sum is greater than 10, repeat. If less than 10, return

let num = 2 // 2
let num2 = 875 // 8 + 7 + 5 = 20 // 2
// %
// find digital root function
function digitalroot(n) {
    // placeholder variables
    let sum = 0
    let mod

    // Absolute value of parameter incase of negative value.
    n = Math.abs(n)

    while (n > 0) {
        // Get remainder of value
        mod = n % 10
        // Divide remainder by 10 and round to whole number to get to next value
        n = Math.floor(n / 10)

        // Add value to mod
        sum += mod
    }

    // Check to see if sum is greater than or equal to 10
    if (sum >= 10) {
        // Recursively finding sum
        sum = digitalroot(sum);
    }

    return sum
}

console.log(digitalroot(num))