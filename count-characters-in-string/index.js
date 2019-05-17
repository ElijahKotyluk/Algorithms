function count (string) {
  var freq = {}

  for(let i = 0; i < string.length; i++) {
    var character = string.charAt(i)
    console.log(`character var: ${character}`)
    console.log('freq before if:', freq)
    if(freq[character]) {
      console.log('freq[character]:', freq[character], 'freq:', freq)
      freq[character]++
      console.log('freq[character]++:', freq[character], 'freq:', freq)
    } else {
      freq[character] = 1
    }
  }

  return freq
}

console.log(count("aba")) // => { 'a': 2, 'b': 1}
console.log(count('')) // => {}
console.log(count('akkssaalskdssd')) // => { 'a': 3, 'k': 3, 's': 5, 'l': 1, 'd': 2 }
