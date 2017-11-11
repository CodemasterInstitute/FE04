// membership.js #2
// This script calculates the cost of a membership.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {

    // Be strict:
    'use strict';

    // Variable to store the total cost:
    var cost;
    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Get a reference to the form elements:
    var type = U.$('type');
    var years = U.$('years');

    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }

    // Check for valid data: 
    if (type && type.value && years && (years > 0)) {

        // Determine the base cost:
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        } // End of switch.

        // Factor in the number of years:
        cost *= years;

        // Discount multiple years:
        if (years > 1) {
            cost *= .80; // 80%
        }

        // Show the total amount:
        U.$('cost').value = '$' + cost.toFixed(2);

    } else { // Show an error:
        if (e.type == 'submit') {
            U.$('cost').value = 'Please enter valid values.';
        }
    }
    // Return false to prevent submission:
    // Prevent the form's submission:
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    return false;

} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    U.addEvent(U.$('theForm'), 'submit', calculate);
    U.addEvent(U.$('type'), 'change', calculate);
    U.addEvent(U.$('years'), 'change', calculate);
} // End of init() function.
window.onload = init;