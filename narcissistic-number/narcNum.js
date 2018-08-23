// find exponent product for each value in the integer with the exponent as the num of digits. find sum of each product.
//  return sum. eg. 153, 1^3 + 5^3 + 3^3 =   <--- return this
const narcNum = 153;

const narcissist = num => {
  const string = num.toString();
  const length = string.length;

  let sum = 0;
  let mod;
  let product;

  do {
    mod = num % 10;
    product = mod ** length;
    sum += product;
    num = Math.floor(num / 10);
  } while (num > 0);

  return sum;
}


console.log(narcissist(narcNum))