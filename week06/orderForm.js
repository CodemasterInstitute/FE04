// Script - calculation.js
// This script calculates an total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.

function calculate() {


    // Get references to the form values:
    var number = document.getElementById('number').value;

    number = parseInt(number);
    if (typeof(number) == 'number') {


        //var to store results
        var factorial = number;
        var squared;
        var cubed;



        // Add validation here later!

        // Calculate factorial:
        //requires a loop
        for (var i = (number - 1); i >= 1; i = i - 1) {
            factorial = factorial * i;
        }


        // calculate square of number
        //squared = number * number;
        squared = Math.pow(number, 2);

        // calculate cube of number
        //cubed = squared * number;
        cubed = Math.pow(number, 3);

        //format  results
        //total = total.toFixed(2);

        // Display factorial, squared and cubed:
        document.getElementById('factorial').value = factorial;
        document.getElementById('squared').value = squared;
        document.getElementById('cubed').value = cubed;
    }

    // Return false to prevent submission:
    return false;

}
// End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {

    /*
     *  add an event listener to the form
     *  
     *  var theForm = document.getElementById('theForm');
     *  theForm.onsubmit = calculate;
     */
    document.getElementById('theForm').onsubmit = calculate;


} // End of init() function.
window.onload = init;