function ipToInt32(ip) {
  let counter = 3;
  let ipArr = ip.split(".").map(num => Number(num));
  let ansArr = [];
  ipArr.map(currentValue => {
    ansArr.push(Number(currentValue * Math.pow(256, counter)));
    counter = counter - 1;
  });
  return ansArr.reduce((acc, cV) => acc + cV, 0);
}
