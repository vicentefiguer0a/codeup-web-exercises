// noinspection GrazieInspection

"use strict";

/**
 * Create a while loop that uses console.log() to create the output shown below.
 * 2
 * 4
 * 8
 * 16
 * 32
 * 64
 * 128
 * 256
 * 512
 * 1024
 * 2048
 * 4096
 * 8192
 * 16384
 * 32768
 * 65536
 */

let counter = 2;

while (counter <= 65536) {
    console.log(counter)
    counter *= 2;
}

/**
 * An ice cream seller can't go home until she sells all of her cones.
 * First write enough code that generates a random number between 50 and 100
 * representing the amount of cones to sell before you start your loop.
 * Inside of the loop your code should generate another random number between 1 and 5,
 * simulating the amount of cones being bought by her clients.
 * Use a do-while loop to log to the console the amount of cones sold to each person.
 * The below code shows how to get the random numbers for this exercise.
 */

let conesToSell = Math.floor(Math.random() * 50) + 50; // Generates random number between 50 and 100.
// console.log(conesToSell); // Testing conesToSell variable.

do {
    var conesBeingBought = Math.floor(Math.random() * 5) + 1;
    if (conesBeingBought <= conesToSell) {
        console.log(`${conesToSell} cones sold...`);
        conesToSell -= conesBeingBought;
    } else if (conesBeingBought > conesToSell) {
        console.log(`Cannot sell you ${conesBeingBought} cones I only have ${conesToSell}...`);
    }

} while (conesToSell !== 0);

console.log(`Yay! I sold them all`);