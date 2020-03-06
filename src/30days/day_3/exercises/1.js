// Exercises: Level 3

const d = new Date();

console.log(
  d.getFullYear() +
    '-' +
    ('00' + d.getMonth()).slice(-2) +
    '-' +
    ('00' + d.getDay()).slice(-2) +
    ' ' +
    ('00' + d.getHours()).slice(-2) +
    ':' +
    ('00' + d.getMinutes()).slice(-2)
);
