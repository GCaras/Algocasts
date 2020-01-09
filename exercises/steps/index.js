// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Personal Solution:
function steps(n) {
    //loop through each 'row' for 'column' comparison and console.log
    for (let i = 0; i < n; i++) {
        let stair = '';

        //loop through each 'column' and add a '#' if less than or equal 
        //to current 'row' or ' ' if  greater than current 'row'
        for (let j = 0; i < n; j++) {
            if (j <= i) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
}

module.exports = steps;