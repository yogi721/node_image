// Create an array using constructor
const arr1 = Array();

// Using square brackets
const arr2 = [];

// split()
const str = 'Javascript';
const arr3 = str.split('');

console.log(arr3);

// accessing an array using indexes
console.log(arr3[0]); // J
console.log(arr3[1]);
console.log(arr3[2]);
console.log(arr3[3]);

// Modifying array element
console.log((arr3[0] = 'G'));
console.log(arr3.join('')); // Gavascript
console.log(arr3.length - 1);
let lastIndex = arr3.length - 1;
console.log(arr3[lastIndex]);

const eightEmptyValues = Array(8); // it creates eight empty values

// Concatenating array using concat
console.log('******* concat() ********');
arr1.push('H', 'e', 'l', 'l', 'o', ' ');
const arr4 = arr1.concat(arr3);
console.log(arr4.join(''));

console.log(arr4.length);

// indeOf()
console.log('******* indeOf() ********');
console.log(arr4.indexOf('o'));

const fruits = ['banana', 'orange', 'mango', 'lemon'];
console.log(fruits.indexOf('mango')); // 2

// lastIndexOf
console.log('******* lastIndexOf() ********');
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(2)); // 7

// includes()
console.log('******* includes() ********');
console.log(numbers.includes(3));
console.log(fruits.includes('orange'));

// isArray()
console.log('******* isArray() ********');

console.log(Array.isArray(fruits));
console.log(Array.isArray(arr4));

// toString()
console.log('******* toString() ********');

console.log(arr4.toString());

console.log('******* join() ********');
console.log('******* slice() ********');
console.log('******* splice() ********');
console.log('******* push() ********');
console.log('******* pop() ********');
console.log('******* unshift() ********');
console.log('******* shift() ********');
console.log('******* reverse() ********');
console.log('******* sort() ********');
