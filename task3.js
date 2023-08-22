// Require the library xhr2
let XMLHttpRequest = require('xhr2');

// Create an object of the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// Open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    
    // Loop through each country and display required information
    for (let country of data) {
        console.log("Country:", country.name.common);
        console.log("Region:", country.region);
        console.log("Sub-region:", country.subregion);
        console.log("Population:", country.population);
        console.log("------------------------------------");
    }
};

// Send the HTTP request
xhr.send();
