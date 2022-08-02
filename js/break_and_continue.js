"use strict";

/**
 * Prompt the user for an odd number between 1 and 50.
 * Use a loop and a break statement to continue prompting the user if they enter invalid input.
 * Use a loop and the continue statement to output all the odd numbers between 1 and 50,
 * except for the number the user entered.
 */

let userOddNum = Number(prompt("Please enter an odd number between 1 and 50:"));

while (userOddNum % 2 === 0) {
    userOddNum = Number(prompt("Invalid input. Please enter an odd number between 1 and 50:"));
    if (userOddNum % 2 !== 0) {
        break;
    }
}

console.log("Number to skip is: " + userOddNum);

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        if (i === userOddNum) {
            console.log("Yikes! Skipping number: " + userOddNum);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}

