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
console.log('charAt position 15 is: ' + challenge.charAt(15));

// 14) What is the character of 'J' , use chartCodeAt()
console.log('charCodeAt J is: ' + challenge.charCodeAt('J'));

// 15) use indexOf to determine the position of the first occurence of 'a' in  the string 
console.log('indexOf a is: ' + challenge.indexOf('a'));

// 16) Use lastIndexOf to determine the position of the last occurrence of a in '30 Days Of JavaScript'.
console.log('lastIndexOf a is: ' + challenge.lastIndexOf('a'));



// 17) Use indexOf to find the position of the first occurrence of the word because in the following sentence:
//     'You cannot end a sentence with because because because is a conjunction'
let phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log('indexOf the first occurrence: ' + phrase.indexOf('Y'));

// 18) Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
//    'You cannot end a sentence with because because because is a conjunction'
console.log('lastIndexOf the last occurrence: ' + phrase.lastIndexOf('n'));

// 19) Use search to find the position of the first occurrence of the word because in the following sentence:
//    'You cannot end a sentence with because because because is a conjunction'
console.log('serch the index of the first match of because: ' + phrase.search('because'));

// 20) Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let phrase2 = ' 30 Days Of JavaScript ';
console.log('remove whitespace at the beginning and the end with trim: ' + phrase2.trim());
console.log('OR: ' + phrase2.trim(' '));

// 21) Use startsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.startsWith('3'));


// 22) Use endsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.endsWith('t'));

// 23) Use match() method to find all the a’s in 30 Days Of JavaScript
let matched = /a/gi
console.log(challenge.match(matched));

// 24) Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let phrase3 = '30 Days of';
let phrase4 = ' Javascript';
console.log(phrase3.concat(phrase4));


// 25) Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

