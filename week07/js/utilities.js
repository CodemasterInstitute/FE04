//creat a variable u
var U = {
    //define the method
    $: function(id) {
        'use strict';
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    }, //end of function

    setText: function(id, message) {
        'use strict';
        if ((typeof id == 'string') && (typeof message == 'string')) {
            var output = this.$(id);
            if (!output) return false;
            if (output.textContent !== undefined) {
                output.textContent = message;
            } else {
                output.innerText = message;
            }
            return true;
        } // End of main IF.
    }, //end of setText Function

    addEvent: function(obj, type, fn) {
        'use strict';
        if (obj && obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) {
            obj.attachEvent('on' + type, fn);
        }
    }, // end of addEvent function

    removeEvent: function(obj, type, fn) {
            'use strict';
            if (obj && obj.removeEventListener) {
                obj.removeEventListener(type, fn, false);
            } else if (obj && obj.detachEvent) {
                obj.detachEvent('on' + type, fn);
            }
        } //end of removeEvent() function.
}; // end of U declaration