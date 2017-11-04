// login.js

// Function called when the form is submitted.
// Function validates the form data and returns a Boolean value.
function validateForm() {
    'use strict';
    // Get references to the form elements:
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    // Validate!
    if ((email.value.length > 0) && (password.value.length > 0)) {

        return true;
    } else {
        alert('please complete form');
        return false;
    }



} // End of validateForm() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';
    // Confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        let loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
    }
} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;