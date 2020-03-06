// Create an empty array called 'reversed'
// for each character in the provided string
// Take the character and add it to the start of 'reversed'
// Return the variable reversed

function reverse(str){
    let reversed = '';

    for(let character of str){
        reversed = character + reversed;
    }

    return reversed;
}

module.exports = reverse;
