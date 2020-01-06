// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Personal Solution:

function capitalize(str) {
    let solution = [];

    //create a loop that splits the string into an array of lower case words.
    //capitalize the first letter of the string and then join it with the remaining charaters 
    for (let word of str.toLowerCase().split(' ')) {
        solution.push(word[0].toUpperCase() + word.slice(1))
    }

    //return converted solution array into string
    return solution.join(' ');
}

module.exports = capitalize;
