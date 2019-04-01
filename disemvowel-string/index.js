/*
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 *
 * Note: for this kata y isn't considered a vowel.
*/

let str1 = 'This website is for losers LOL!'

const disemvowel = (string) => {

  let regex = /[aeiou]/ig;

  // replace vowels(using regex) with empty string:
  return string.replace(regex, '');
}

// return = "Ths wbst s fr lsrs LL!":
console.log(disemvowel(str1));
