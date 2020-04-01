// 1. Declare a function fullName and it print out your full name.

function fullName() {
  console.log('full name');
}

// 2. Declare a function fullName and now it takes firstName,
//    lastName as a parameter and it returns your full - name.

function fullName(fName, lName) {
  console.log(fName + ' ' + lName);
}

// 3. Declare a function addNumbers and it takes two parameters and it returns sum.

function addNumbers(n1, n2) {
  return n1 + n2;
}

// 4. An area of a rectangle is calculated as follows: area = length x width.
//    Write a function which calculates areaOfRectangle.
const areaOfRectangle = (lengthR, widthR) => {
  let area = lengthR * widthR;
  return area;
};

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
//    Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (lengthR, widthR) => {
  return 2 * (lengthR + widthR);
};

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height.
//      Write a function which calculates volumeOfRectPrism.

// 7. Area of a circle is calculated as follows: area = π x r x r.
//    Write a function which calculates areaOfCircle

// 8. Circumference of a circle is calculated as follows: circumference = 2πr.
//    Write a function which calculates circumOfCircle

// 9. Density of a substance is calculated as follows:density= mass/volume.
//    Write a function which calculates density.

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
//     Write a function which calculates a speed of a moving object, speed.

// 11. Weight of a substance is calculated as follows: weight = mass x gravity.
//     Write a function which calculates weight.

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
//     Write a function which convert oC to oF convertCelciusToFahrenheit.
