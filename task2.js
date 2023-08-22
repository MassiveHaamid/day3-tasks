// install the xhr2 library in the terminal
// for that in your terminal type the following:
// npm install xhr2

// Require the library xhr2
let XMLHttpRequest = require('xhr2');

// Create an object of the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// Open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    
    // Display all the country flags
    for (let country of data) {
        if (country.flags) {
            console.log(country.flags.png);
        }
    }
};

// Send the HTTP request
xhr.send();
