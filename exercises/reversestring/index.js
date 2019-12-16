// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }


// Solution 1 Refactor
function reverse(str) {
    debugger;
    return str.split('').reverse().join('');
}

reverse('asdf');

//Solution 2
// function reverse(str) {
//     var reversed = '';

//     //new for loop syntax
//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed
// }

//Solution 3
// function reverse(str) {
//     return str.split('').reduce((rev, char) =>  char + rev, '');
// }



module.exports = reverse;
