"use strict";

/**
 * Create a function named showMultiplicationTable that accepts a number
 * and console.logs the multiplication table for that number.
 * (Just multiply by the numbers 1 through 10)
 */

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

showMultiplicationTable(7); // Testing showMultiplicationTable.

/**
 * Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
 * and output to the console whether each number is odd or even.
 */

for (let i = 1; i <= 10; i++) {
    let randNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20);
    if (randNumber % 2 === 0) {
        console.log(randNumber + " is even.");
    } else {
        console.log(randNumber + " is odd.");
    }
}

/**
 * Create a for loop that uses console.log to create the output shown below.
 * 1
 * 22
 * 333
 * 4444
 * 55555
 * 666666
 * 7777777
 * 88888888
 * 999999999
 */

let output = '';
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        output = output + i;
    }
    console.log(output);
    output = "";
}

/**
 * Create a for loop that uses console.log to create the output shown below.
 * 100
 * 95
 * 90
 * 85
 * 80
 * 75
 * 70
 * 65
 * 60
 * 55
 * 50
 * 45
 * 40
 * 35
 * 30
 * 25
 * 20
 * 15
 * 10
 * 5
 */

for (let i = 100; i > 0;) {
    console.log(i);
    i -= 5;
}