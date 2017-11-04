// Script  - text.js
// This script limits the amount of text that can be entered into a textarea.

// Function called when the form is submitted.
// Function limits the text and returns false.
function limitText() {
    'use strict';
    // Get a reference to the form value:
    var comments = U.$('comments');
    // Count the characters:
    var count = comments.value.length;

    // Display the number of characters submitted:
    U.$('count').value = count;

    // Cut the overage:
    if (count > 100) {
        comments.value = comments.value.slice(0, 100);
    }


} // End of limitText() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    U.addEvent(U.$('comments'), 'keyup', limitText);
    U.addEvent(U.$('comments'), 'change', limitText);
};