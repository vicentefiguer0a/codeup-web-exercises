(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Vicente",
        lastName: "Figueroa",
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return `Hello from ${person.firstName} ${person.lastName}!`;
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        // Display name of shopper
        // Display amount before discount
        // Display the amount of discount
        // Display amount after discount

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // Using forEach function to check if shopper gets discount added (only if shopper spent more than $200).
    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            let discount = shopper.amount * 0.12;
            console.log(`${shopper.name}, you paid $${shopper.amount}, your discount amount is $${discount}, and now you will pay $${shopper.amount - discount}`);
        } else {
            console.log(`${shopper.name}, you are paying $${shopper.amount}, and you get no discount because you spent less than $200.`);
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

        let books = [
        {
            title: "The Knowledge of an Apple",
            author: {
                firstName: "Trent",
                lastName: "Dingle"
            }
        },
        {
            title: "Great Adventures of Old People",
            author: {
                firstName: "Quandale",
                lastName: "Kingston"
            }
        },
        {
            title: "Little Big Chicken Wing",
            author: {
                firstName: "Gregory",
                lastName: "Tinklebottom"
            }
        },
        {
            title: "My Life",
            author: {
                firstName: "Larry",
                lastName: "Saggington"
            }
        },
        {
            title: "How to Code Like an Expert",
            author: {
                firstName: "Vicente",
                lastName: "Figueroa"
            }
        }
            ];
    // Logging properties from books object for testing purposes.
    console.log(books[4].title);
    console.log(books[4].author.firstName);
    console.log(books[4].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // 1. Loop through "books" array
    // 2. Output the following "books" information in format given above.
    // - book number
    // - book title
    // - author full name (firstName + lastName)

    for (let i = 0; i < books.length; i++) { // Loops through books object and logs each book number, book title, and book author (full name).
        console.log(`Book # ${books.indexOf(books[i])}`);
        console.log(`Title: ${books[i].title}`);
        console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
        console.log(`---`);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) { // Function creates a book object with a title and author.
        let firstName = author.split(' ').slice(0, -1).join(' ');
        let lastName = author.split(' ').slice(-1).join(' ');
        let book = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
        return book;
    }

    function showBookInfo(books) {
            console.log(`Title: ${books.title}`);
            console.log(`Author: ${books.author}`);
            console.log(`---`);
    }

    let myBook = createBook("The New Programmer", "Vicente Figueroa");

    console.log(myBook);
    // console.log(showBookInfo(myBook));
})();
