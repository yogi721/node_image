const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if .5 up if 0.5 down rounding

console.log(Math.round(9.81)); // 10
console.log(Math.floor(PI)); // 3 rounging down
console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 2, 5.3)); // -5
console.log(Math.max(-5, 3, 2, 5.3)); // 5.3

const randNum = Math.random();
console.log(randNum); // a random num (0.0 to 0.9)

const numFloor = Math.floor(Math.random() * 11); // create (0 to 10)
console.log(numFloor);

console.log(Math.abs(-10)); // 10 - absolute value

console.log(Math.sqrt(100)); // 10 - square root
console.log(Math.sqrt(2)); // 1.4142135623730951 - square root

console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

//--------------------------------------------------------//

console.log('//------Trigonometry------//');
console.log(Math.sin(0)); // 0
console.log(Math.sin(60)); // -0.3048106211022167

console.log(Math.cos(0)); // 1
console.log(Math.cos(60)); // -0.9524129804151563

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Properties
// ----------
Math.E; // Euler's constant and the base of natural logarithms; approximately 2.718.
Math.LN2; // Natural logarithm of 2; approximately 0.693.
Math.LN10; // Natural logarithm of 10; approximately 2.303.
Math.LOG2E; // Base 2 logarithm of E; approximately 1.443.
Math.LOG10E; // Base 10 logarithm of E; approximately 0.434.
Math.PI; // Ratio of the a circle's circumference to its diameter; approximately 3.14159.
Math.SQRT1_2; // Square root of ½ (or equivalently, 1/√2); approximately 0.707.
Math.SQRT2; // Square root of 2; approximately 1.414.


// Methods
// -------
Math.abs(x) // Returns the absolute value of a number.
Math.acos(x) // Returns the arccosine of a number.
Math.acosh(x) // Returns the hyperbolic arccosine of a number.
Math.asin(x) // Returns the arcsine of a number.
Math.asinh(x) // Returns the hyperbolic arcsine of a number.
Math.atan(x) // Returns the arctangent of a number.
Math.atanh(x) // Returns the hyperbolic arctangent of a number.
Math.atan2(y, x) // Returns the arctangent of the quotient of its arguments.
Math.cbrt(x) // Returns the cube root of a number.
Math.ceil(x) // Returns the smallest integer greater than or equal to a number.
Math.clz32(x) // Returns the number of leading zeroes of a 32-bit integer.
Math.cos(x) // Returns the cosine of a number.
Math.cosh(x) // Returns the hyperbolic cosine of a number.
Math.exp(x) // Returns Ex, where x is the argument, and E is Euler's constant (2.718…, the base of the natural logarithm).
Math.expm1(x) // Returns subtracting 1 from exp(x).
Math.floor(x) // Returns the largest integer less than or equal to a number.
Math.fround(x) // Returns the nearest single precision float representation of a number.
Math.hypot([x[, y[, …]]]) // Returns the square root of the sum of squares of its arguments.
Math.imul(x, y) // Returns the result of a 32-bit integer multiplication.
Math.log(x) // Returns the natural logarithm (㏒e; also, ㏑) of a number.
Math.log1p(x) // Returns the natural logarithm (㏒e; also ㏑) of 1 + x for a number.
Math.log10(x) // Returns the base 10 logarithm of a number.
Math.log2(x) // Returns the base 2 logarithm of a number.
Math.max([x[, y[, …]]]) // Returns the largest of zero or more numbers.
Math.min([x[, y[, …]]]) // Returns the smallest of zero or more numbers.
Math.pow(x, y) // Returns base to the exponent power, that is, xy.
Math.random() // Returns a pseudo-random number between 0 and 1.
Math.round(x) // Returns the value of a number rounded to the nearest integer.
Math.sign(x) // Returns the sign of the x, indicating whether x is positive, negative, or zero.
Math.sin(x) // Returns the sine of a number.
Math.sinh(x) // Returns the hyperbolic sine of a number.
Math.sqrt(x) // Returns the positive square root of a number.
Math.tan(x) // Returns the tangent of a number.
Math.tanh(x) // Returns the hyperbolic tangent of a number.
Math.toSource() // Returns the string "Math".
Math.trunc(x) // Returns the integer part of the number x, removing any fractional digits.