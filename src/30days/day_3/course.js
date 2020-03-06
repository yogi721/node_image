//**********************************
// 1) Booleans
//**********************************
// Truthy values
// All numbers(positive and negative) are truthy except zero
// All strings are truthy
// true
// Falsy values
// 0
// 0n
// null
// undefined
// NaN
// false
// '', "", ``, empty string

//**********************************
// 2) Undefined
//**********************************
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet
// Null
let empty = null;
console.log(empty); // -> null , means no value

//**********************************
// 3) Operators
//**********************************
// Assignment Operators
//---------------------------
x = y;
x + y;
x - y;
x * y;
x / y;
x % y;
x ** y;

// Arithmetic Operators
//---------------------------
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

//  Comparison Operators
//---------------------------
console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == '3'); // true, compare only value
console.log(3 === '3'); // false, compare both value and data type
console.log(3 !== '3'); // true, compare both value and data type
console.log(3 !== '3'); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 == ''); // true, equivalent
console.log(0 == ' '); // true, equivalent
console.log(0 === ''); // false, not exactly the same
console.log(0 === false); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log('mango'.length == 'avocado'.length); // false
console.log('mango'.length != 'avocado'.length); // true
console.log('mango'.length < 'avocado'.length); // true
console.log('milk'.length != 'meat'.length); // false
console.log('milk'.length == 'meat'.length); // true
console.log('tomato'.length == 'potato'.length); // true
console.log('python'.length > 'dragon'.length); // false

// Logical Operators
//---------------------------

// Increment Operator
//---------------------------

// Decrement Operator
//--------------

// Ternary Operators
//--------------

//**********************************
// 4) Window Methods
//**********************************
// Window alert() method
//--------------

// Window prompt() method
//--------------
let number = prompt('Enter number', 'number goes here');
console.log(number);

// Window confirm() method
//--------------

//**********************************
// 5) Date Object
//**********************************
// Creating a time object
//--------------
const now = new Date();
console.log(now); // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

// getFullYear(),
console.log(now.getFullYear()); // 2020

// getMonths(),
console.log(now.getMonth()); // 0, because the month is January,  month(0-11)

// getDate(),
console.log(now.getDate()); // 4, because the day of the month is 4th,  day(0-31)

// getDay(),
console.log(now.getDay());

// getHours(),
console.log(now.getHours());

// getMinutes,
console.log(now.getMinutes());

// getSeconds(),
console.log(now.getSeconds());

// getMilliseconds(),

// getTime(),
console.log(now.getTime()); // 1578092201341, this is the number of seconds passed from January 1

const allSeconds = Date.now(); //
console.log(allSeconds); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true
