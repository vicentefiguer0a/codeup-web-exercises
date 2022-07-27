"use strict";

//This code is from the "JavaScript with HTML" exercise.
console.log('Hello from external JavaScript!');

alert('Welcome to my Website!');

const favoriteColor = prompt('What is your favorite color?');

alert('Cool! ' + favoriteColor + ' is a great color!');


//This code is from the "Working with Data Types, Operators, and Variables" exercise from the introduction.
const movieRentalTotal = Number(prompt('How many days total did you hold onto the movies? ($3 per day)'));

const total = movieRentalTotal * 3;

alert('You will have to pay ' + '$' + total + '.');


const hoursGoogle = Number(prompt('How many hours did you work at Google?'));
const hoursAmazon = Number(prompt('How many hours did you work at Amazon?'));
const hoursFacebook = Number(prompt('How many hours did you work at Facebook?'));

const totalPay = (hoursGoogle * 400) + (hoursAmazon * 380) + (hoursFacebook * 350);

alert('You will receive $' + totalPay + ' for the week.');
