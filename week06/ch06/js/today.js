// today.js
// This script indicates the current date and time.

// Call this function when the page has loaded:
function init() {

    // Want to be strict:
    'use strict';

    // Create a Date object:
    var today = new Date();
    var christmas = new Date(25 / 12 / 2017);

    var daysuntil = today - christmas;
    daysuntil = ((((daysuntil / 1000) / 60) / 60) / 24);

    // Create a custom message:
    var message = 'Right now it is ' + today.toLocaleDateString();
    message += ' at ' + today.getHours() + ':' + today.getMinutes();

    var message2 = 'it is ' + daysuntil.toFixed(0) + ' christmas';

    // Get a reference to the paragraph:
    var output = document.getElementById('output');

    // Update the innerText or textContent property of the paragraph:
    if (output.textContent !== undefined) {
        output.textContent = message + message2;
    } else {
        output.innerText = message + message2;
    }

} // End of init() function.

window.onload = init;