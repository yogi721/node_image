// 1) Using console.log() print out the following statement.
// The quote 'You will not enter paradise until you have faith. And you will not complete your faith until you love one another.

console.log("The quote 'You will not enter paradise until you have faith. And you will not complete your faith until you love one another.'");


// 2) Using console.log() print out the following quote by Mother Teresa.
// "long text"

console.log("\"God enjoins you to treat women well, for they are your mothers, daughters, aunts.\"");

// 3) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = typeof('10') === 10 ? 10 : Number('10') ;
console.log(ten);

let one = typeof('1') === 1 ? 1 : parseInt('1') ;
console.log(one);

let twenty = typeof('20') === 20 ? 20 : +'20' ;
console.log(twenty);



// 4) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let ten2 = '9.8';
console.log(ten2 + ' is: ' + typeof(ten2) );
if(typeof(ten2)===10){
    console.log(ten2);
}else{
    ten2 = Math.round(parseFloat(ten2));
    console.log(ten2 + ' is: ' + typeof(ten2) );
}


// 5) Check if 'on' is found in both python and jargon

// 6) I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon.'
let jarg = /jargon/gi;

if(sentence.match(jarg)){
    console.log('Yes');    
}else{
    console.log('Noooooo');    
}
// 7) Generate a random number between 0 and 100 inclusive.
console.log(Math.round(Math.random()*101));

// 8) Generate a random number between 50 and 100 inclusive.
let randomFromTo = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);

console.log(randomFromTo(50,100));

// 9) Generate a random number between 0 and 255 inclusive.
console.log(Math.floor(Math.random()*256));

// 10) Access the 'JavaScript' string characters using a random number.
let word = 'Javascript';

console.log(word[Math.floor(Math.random()*word.length)]);


// 11) Use console.log() and escape characters to print the following pattern.
//      1 1 1 1 1
//      2 1 2 4 8
//      3 1 3 9 27
//      4 1 4 16 64
//      5 1 5 25 125

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

// 12) Use substr to slice out the phrase because because because in the following sentence:
//    'You cannot end a sentence with because because because is a conjunction'

let withBecause = 'You cannot end a sentence with because because because is a conjunction';
let because = /because/gi;
let withoutBecause = withBecause.split(' ');

//console.log(withoutBecause);

const filtred = withoutBecause.filter( value => value !== 'because');
console.log(filtred.join(' '));

