// String concatenation with (+) or (.)

const firstName = 'Mehdi';
const lastName = 'Sem';

const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Long string multi lines with Template literal allowing embedded expression
const country = 'Italy';
const paragraph = `My name is Mehdi . I live in ${country}. \
I hope you enjoy :)`;
console.log(paragraph);

// Escape Sequences in Strings
//      \n = new line
//      \t = tab(8 spaces)
//      \\ = Back slash
//      \' = single quote
//      \\ = Double quote

//-------------String Methods--------------//

let js = 'Javascript';
console.log(js.length);     // 10

let firstLetter = js[0];
console.log(firstLetter);   // J

let lastIndex = js.length -1;
console.log(lastIndex);         // 9
console.log(js[lastIndex]);     // t

console.log(js.toUpperCase());  // JAVASCRIPT
console.log(js.toLowerCase());   // javascript
console.log(js.italics());      // <i>Javascript</i>
console.log(js.substr(4,6));    // script
console.log(js.substring(0,4)); // Java (it doesn't include stopping index)

//----------split()
console.log(js.split());        // [ 'Javascript' ]
console.log(js.split(''));        // ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't' ]

let py = "Python and Javascript";
console.log(py.split(' '));        // [ 'Python', 'and', 'Javascript' ]

//---------trim() -> removes trailing space in the beginning and the end

console.log(py.trim(' '));

//---------includes() -> Boolean

console.log(py.includes('and'));    // true
console.log(py.includes('javascript'));    // false 
console.log(py.includes('Javascript'));    // true


//---------replace(oldsubstring, newsubstring) 
console.log(js.replace('Javascript', 'Python'));    // Python

//---------chartAt() -> takes index and returns the value at that index
console.log(js.charAt(0));      // J
console.log(js.charAt(1));      // a
console.log(js.charAt(2));      // v
console.log(js.charAt(3));      // a

//---------chartCodeAt() -> ASCII
console.log(js.charCodeAt(0));  // 74

//---------indexOf() -> returns the first position of substring, if does not exist return -1
console.log(py.indexOf('and'));     // 7
console.log(py.indexOf('Java'));    // 11
console.log(py.indexOf('a'));       // 7
console.log(py.indexOf('h'));       // 3
console.log(py.indexOf('H'));       // -1

//---------lastIndexOf()

let word = 'study or not study'
console.log(word.lastIndexOf('study'));     // 13

//---------concat()
//---------startsWith()
//---------endsWith()
//---------search()
//---------match()
//---------repeat()

//---------typeof()
//---------parseInt()
//---------Number()
//---------parseFloat()








