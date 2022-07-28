"use strict";

//This code is from the "JavaScript with HTML" exercise.
console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

let favoriteColor = prompt("What is your favorite color?");

alert("Cool! "+ favoriteColor + " is a great color!");

//All code below this comment is from question 3, from the "Working with Data Types, Operators, and Variables" exercise from the introduction.

let moviePrice = 3; // Declaring variables.
let littleMer = Number(prompt("How many days did you have The little Mermaid for?"));
let brotherBear = Number(prompt("How many days did you have Brother Bear for?"));
let hercules = Number(prompt("How many days did you have Hercules for?"));

let total = (littleMer * moviePrice) + (brotherBear * moviePrice) + (hercules * moviePrice) // Calculating total price.

alert("You will have to pay " + '$' + total + "."); // Alerts user of total price for movie rental.

// Second bulletin from question 3.

let payGoogle = 400; // Declaring variables.
let payAmazon = 380;
let payFacebook = 350;
let hoursGoogle = Number(prompt("How many hours did you work at Google?"));
let hoursAmazon = Number(prompt("How many hours did you work at Amazon?"));
let hoursFacebook = Number(prompt("How many hours did you work at Facebook?"));

let totalPay = (hoursGoogle * payGoogle) + (hoursAmazon * payAmazon) + (hoursFacebook * payFacebook); // Calculating total payment.

alert("You will receive $" + totalPay + " for the week.");

// Third bulletin from question 3.

let isFull = false; // Declaring variables bases on conditions(?).
let isConflict = false;

let enrolled = !isFull && !isConflict; // If conditions check out, student is able to enroll in a class.

// Fourth bulletin from question 3.

let premiumMember;
let userPurchaseItems = Number(prompt("How many items did you buy?"));
let offerExpired = true;
let prodOfferApply = (userPurchaseItems > 2 && !offerExpired) || premiumMember;
