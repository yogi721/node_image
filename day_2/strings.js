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