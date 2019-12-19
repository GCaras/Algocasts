// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Solution 1
function reverseInt(n) {
    
    //Stringify number and assign to variable
    const intRev = n.toString().split('').reverse().join('');

    //convert to negative integer if n is less than 0
    if (n < 0) {
        return parseInt(intRev) * -1;
    } else {
        return parseInt(intRev);
    }
}

module.exports = reverseInt;