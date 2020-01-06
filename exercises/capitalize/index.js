// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Personal Solution:

// function capitalize(str) {
//     let solution = [];

//     //create a loop that splits the string into an array of lower case words.
//     //capitalize the first letter of the string and then join it with the remaining charaters 
//     for (let word of str.toLowerCase().split(' ')) {
//         solution.push(word[0].toUpperCase() + word.slice(1))
//     }

//     //return converted solution array into string
//     return solution.join(' ');
// }

// Solution 2:
function capitalize(str) {
    //establish first character in string is uppercase
    result = str[0].toUpperCase();

    //loop through each character of the string.
    //if a space character precedes the current index, capitalize and 
    //add to result otherwise push the character as-is
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }

    return result;
}

//not a great solution because there can be special characters entered 
//as the first character which may result in incorrect assessment 
//of first letter

module.exports = capitalize;
