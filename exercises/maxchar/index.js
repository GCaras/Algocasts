// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //create empty object to assing chars as keys and counts as values for each instance of a char
    const charMap = {};

    //identify the current highest counted char in an object
    let max = 0;
    
    //char that holds the highest count, to be returned
    let maxChar = "";

    //loop through the str and add new keys or add to count of already included char key
    for (let char of str) {
        if (charMap[char]) {
            charMap[char] + 1;
        } else {
            charMap[char] = 1
        }
    }
    
    //loop through the newly populated object and update max and maxChar as higher counts are identified
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    
    return maxChar;
}

module.exports = maxChar;