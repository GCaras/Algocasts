// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Solution 1:

/*
*straightforward comparison of the reversed string by 
*converting to an array, reversing the array, and 
*joining it into a new string
*/

// function palindrome(str) {
//     const pal = str.split('').reverse().join('');
//     if (str === pal) {
//         return true
//     } else {
//         return false
//     }
// }

//Solution 1 refactored:

// function palindrome(str) {
//     const pal = str.split('').reverse().join('');

//     return str === pal;
// }

//Solution 2:

/*
*splits the string into an array and checks each index at the 
*array length - i - 1 to see if each letter matches the corresponding 
*index. Much less efficient.
*/
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];  
    })    
}


module.exports = palindrome;