const palindrome = require('./index');

test('palindrome function exists', () => {
  expect(typeof palindrome).toEqual('function');
});

test('abcd is not palindrome must return false', () => {
  expect(palindrome('abcd')).toBeFalsy();
});

test('abba is palindrome must return true', () => {
  expect(palindrome('abba')).toBeTruthy();
});

test('"1000000001" a palindromee', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindromee', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindromee', () => {
  expect(palindrome('pennep')).toBeTruthy();
});
