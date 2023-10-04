// How do you reverse a given string in place?
// "nikhilsaininikhilsaini"
// console.log('nikhilsaininikhilsaini'.split('').reverse().join(''));

// const str = 'nikhilsaininikhilsaini';
// const strArray = str.split('');
// const reverStr = [];
// for (let i = strArray.length - 1; i >= 0; i--) {
//   reverStr.push(strArray[i]);
// }
// console.log('str', reverStr.join(''));

// const str = 'nikhilsaininikhilsaini';
// let reverseStr = '';
// for (let i = str.length - 1; i >= 0; i--) {
//   reverseStr += str[i];
// }
// console.log(reverseStr);

// How do you print duplicate characters from a string?
//
let str = 'nikhil saini';
let duplicate = [];
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    if (i !== j && str[i] === str[j]) {
      duplicate.push(str[i]);
      break;
    }
  }
}
console.log(duplicate);
let count = {};

for (let i = 0; i < duplicate.length; i++) {
  if (count[duplicate[i]]) {
    count[duplicate[i]];
  }
  count[duplicate[i]] == 1;
}

console.log(count);
