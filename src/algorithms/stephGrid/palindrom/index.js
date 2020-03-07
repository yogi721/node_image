//************************************************** */
function palindrome(str) {
  let reversed = str
    .split('')
    .reverse()
    .join('');

  return reversed === str;
}

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;
