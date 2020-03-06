// 1) 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of word love in this sentence.

let sentence =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let wanted = /love/gi;

let cleanArray = sentence.match(wanted);
console.log('The number of love: ' + cleanArray.length);
