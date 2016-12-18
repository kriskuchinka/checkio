// Code below is partly from CheckIO, but the function is what I tried in the CheckIO 
// console that didn't work. Decided to try it locally and see if I could achieve the goal.

// The Mission:
/* 
You are given a non-empty list of integers (X). For this task, you should return a list consisting of only the non-unique elements in this list. To do so you will need to remove all unique elements (elements which are contained in a given list only once). When solving this task, do not change the order of the list. Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
 */

//------------------------------------------------------------------------------------||
// "use strict";

// function nonUniqueElements(data) {
//     for (i = 0; i <= data.length; i++) {
//         workingNumber = data[i];
//         uniqueNumber = data.indexOf(workingNumber);

//         if (uniqueNumber = -1) {
//             data.splice(uniqueNumber);    
//         }
//     }
//     return data;
// }

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
//     assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
//     assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
//     assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }
//---------------------------------------------------------------------------------------||

console.log("JavaScript is connected.");

var x = [2, 1, 2];
console.log("The array before the function is: " + x);

// function nonUniqueElements(x) {
//     // Loop through array
//     for (i = 0; i <= x.length; i++) {
//         // Start with working number
//         // var workingNumber = x[i];
//         // Test that variable is in place
//         // console.log("The working number is: " + workingNumber);
//         // Create variable for uniqueNumber. 
//         var currentVariable = x.indexOf(x[i]);
//         console.log("The current number is: " + currentVariable);

//         if (currentVariable === -1) {
//             x.splice(currentVariable);
//         } else if (currentVariable === 0 || currentVariable === 1) {
//             console.log("The changed array is: " + x);
//         }
//     }

//     return x;

// }
function nonUniqueElements(x) {
    // Loop through array
    for (i = 0; i < x.length; i++) {
        var currentVariable = x[i];
        console.log("The current variable is " + currentVariable);
        var indexLocation = x.indexOf(i, i);
        console.log("The index location of " + x[i] + " is: " + indexLocation);
        // if (workingVariable === -1) {
        //     x.splice(workingVariable);
        // } else if (x.indexOf() >= 0) {
        //     console.log("The variable " + workingVariable + " is not unique.");
        // }
    }
    console.log("The final array is: " + x);
    // Find if the number is in the array more than once
        // If it is, leave it in the array.
        // If unique, remove from array
}
nonUniqueElements(x);

