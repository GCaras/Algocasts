// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My Solution:

//Create helper function to remove special characters from each string, convert to lowercase, then an array, then sort, then return as string
function cleanString(str) {
    return str.replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .toString();
}

function anagrams(stringA, stringB) {
    //compare cleaned strings and return truthy or falsey
    return cleanString(stringA) === cleanString(stringB);
}

// Solution 1:

// // Helper function to loop through each string in anagrams function to remove special characters and convert to lowercase and convert to object.
// function buildCharMap(str) {
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

// function anagrams(stringA, stringB) {
//     //create formatted variable objects within the anagram function using helper function
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     //compare amount of keys in each object and return false if not matching
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     } 

//     //if key amounts match, compare amout of each key in aCharMap to the corresponding key in bCharMap and return false if there isn't a match;
//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         } 
//     } 
//     //return true if all above conditions are met
//     return true;
// }


module.exports = anagrams;