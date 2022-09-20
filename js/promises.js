"use strict";
// Create a function that accepts a GitHub username
// Returns a promise that resolves returning just the date of the last commit that user made
// Reference the GitHub api documentation to achieve this
const githubReq = (username) => {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        auth: GITHUB_TOKEN,
        username: username
    }).then(data => data.json())
        .then((user) => console.log(`Date of last commit: ${user[0].created_at}`))
        .catch(error => console.log(error));
}

githubReq("vicentefiguer0a");

// const wait = (num) => {
//     setTimeout(() => {
//         console.log(`You'll see this after ${num} seconds`);
//     }, num);
// }

const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let seconds = String(num)[0];
            if (num) {
                resolve(`You'll see this after... ${seconds} seconds`);
            } else {
                reject('Network Connection Error!');
            }
        }, num);
    });
}

const request = wait(5000);
console.log(request);

request.then(message => console.log(message))
    .catch(message => console.log(message));