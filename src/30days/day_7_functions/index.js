// Function Declaration
/***********************/

// function functionName() {
//     // code goes here
// }

// functionName() // calling function

// Function with many parameters
/*******************************/

// function manyParams(parm1, parm2, parm3,...){
//    //code goes here
// }

// manyParams(parm1,parm2,parm3,...) // during calling or invoking three arguments needed

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));

// Arrow Function
const areaOfCircle = radius => {
  let area = Math.PI * radius * radius;
  return area;
};
console.log(areaOfCircle(10));

/****************Function with unlimited number of parameters ******/

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

/**********Unlimited number of parameters in arrow function ******/

const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))(
  // 173

  /********************** Self Invoking Functions *************/
  // Self invoking functions are anonymous functions which do not need to be called to return a value.

  function(n) {
    console.log(n * n);
  }
)(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n;
})(10);

console.log(squaredNum);

/********************** Arrow Function *************/

const square = n => {
  return n * n;
};

console.log(square(2)); // -> 4

// if we have only one line, it can be written as follows, explicit return
const square = n => n * n; // -> 4

/********************** Function with default parameters *************/
function functionName(param = value) {
  //codes
}

// Calling function
functionName();
functionName(arg);
