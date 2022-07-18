// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowel_count(str1) {
  const vowels = ["a", "e", "i", "o", "u"];
  //let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (vowels.includes(str1[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
// loop through string to test if each character is a vowel
//for (let letter of str1.toLowerCase()) {
// if (vowels.includes(letter)) {
//  count++;
// }
// }
// return number of vowels

console.log(vowel_count("The quick brown fox"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  //write your code here
}
console.log(makeid(8));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc() {
  //write your code here
}

abc();
