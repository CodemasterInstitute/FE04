//load the function
function addLoadEvent(func) {
    'use strict';
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}
//function to insert created elements
function insertAfter(newElement, targetElement) {
    'use strict';
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

//prepare placeholder in page
function preparePlaceholder() {
    'use strict';
    //check for created element and textnode
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    //variable for placeholder
    var placeholder = document.createElement('img');
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/473168/placeholder.png");
    placeholder.setAttribute("alt", "my image gallery");
    //variable for the description
    var description = document.createElement('p');
    description.setAttribute("id", "description");
    //variable for the description text
    var desctext = document.createTextNode("Choose an image");
    //append textnode to element
    description.appendChild(desctext);
    //variable for the gallery
    var gallery = document.getElementById('imagegallery');
    //append placeholder and description text

    //inserting elements
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}
//prepare the gallery for loading
function prepareGallery() {
    'use strict';
    //checking for elements or tags
    if (!document.getElementsByTagName) return false;
    //checking ofr elements with IDs
    if (!document.getElementById) return false;
    //checking for a specific id - imagegallery
    if (!document.getElementById('imagegallery')) return false;

    //create two variables
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');

    //loop to go through links and assign onclick value
    for (var i = 0; i < links.length; i += 1) {
        links[i].onclick = function() {
            return showPic(this);
        };
        links[i].onkeypress = links[i].onclick;
    }

}


//to show chosen picture
function showPic(whichPic) {
    'use strict';
    if (!document.getElementById("placeholder")) return true;
    //getting the variables for placeholder and image
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    //changes the source of the placeholder image
    placeholder.setAttribute("src", source);

    if (!document.getElementById("description")) return false;
    //getting the title of the image and writing it to the page.
    if (whichPic.getAttribute("title")) {
        var text = whichPic.getAttribute("title");
    } else {
        var text = "";
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

//https://codepen.io/codemasterinstitute/live/aJYPao