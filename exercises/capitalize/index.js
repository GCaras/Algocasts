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
    //clean up string by making all characters lower case and then split into array by each word
    const stringArr = str.toLowerCase().split(' ');
    let solution = [];

    //loop through the stringArr to split the first letter of each word and capitalize it, join back with remaining characters and push into solution array
    for (let word in stringArr) {
        solution.push(`${stringArr[word][0].toUpperCase()}${stringArr[word].slice(1)}`)
    }

    //return converted solution array into string
    return solution.join(' ');
}

module.exports = capitalize;
