// 1) Declare a variable name challenhe and assign it to an initial value '30 Days Of Javascript'
let challenge = '30 Days Of Javascript'

// 2) Print the string on the browser console using console.log()
console.log(challenge);

// 3) Print the length of the string 
console.log(challenge.length);

// 4) Change the string to capital letters
console.log(challenge.toUpperCase());

// 5) Change the string to lowercase
console.log(challenge.toLowerCase());

// 6) Cute(slice) out the first word of the string using substr or substring
console.log(challenge.substr(3, 4));
console.log(challenge.substring(3, 7));


// 7) slice out the phrase 'Days Of Javascript'
console.log(challenge.substr(3));
console.log(challenge.substring(3));



// 8) Chek if the string contains a word 'Script' using includes()
console.log(challenge.includes('Script'));
console.log(challenge.includes('script'));


// 9) Split the string into array using split()
console.log(challenge.split());

// 10) Split the string at the space
console.log(challenge.split(' '));

// 11) 'Facebook, Google, Microsoft, Apple, IBM, Amazon' split at the comma
console.log('Facebook, Google, Microsoft, Apple, IBM, Amazon'.split(','));

// 12) Change '30 Days Of Javascript' to '30 Days Of Python' using replace()
let py = challenge.replace('30 Days Of Javascript','30 Days Of Python');
// OR 
// let py = challenge.replace(challenge,'30 Days Of Python');
console.log(py);

// 13) What is the character at index 15 in '30 Days Of Javascript', use chartAt() 
console.log(challenge.charAt(15));

// 14) What is the character of 'J' , use chartCodeAt()
console.log(challenge.charCodeAt('J'));

// 15) use indexOf to determine the position of the first occurence of 'a' in  the string 
console.log(challenge.indexOf('a'));

// 16) -------------------------
// 17) -------------------------
// 18) -------------------------
// 19) -------------------------
// 20) -------------------------
// 21) -------------------------
// 22) -------------------------
// 23) -------------------------
// 24) -------------------------
// 25) -------------------------

