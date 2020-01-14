// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Personal solution:

// function vowels(str) {
//     let count = 0;

//     let vowels = ['a', 'e', 'i', 'o', 'u'];

//     // loop through each character and add to the counter if it matches
//     // any of the letters within the array

//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count += 1;
//         }
//     }

//     return count;
// }

function vowels(str) {
    //search the string for any matches within the brackets
    //the 'g' makes sure that the match function doesn't stop at the first match
    //the 'i' makes sure the search is case insensitive

    const matches = str.match(/[aeiou]/gi);

    //ternery expression to return 0 if there are no matches
    //so that the matches variable doesn't return null
    return matches ? matches.length : 0;
}

module.exports = vowels;