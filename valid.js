console.log("bleh");

var x;
let firstnameInput = document.getElementById("firstname");
let lastnameInput = document.getElementById("lastname");

function letter (String) {
    return (/[a-zA-Z/]/).test(String);
} 
firstnameInput.onblur = function validation(event) {
    
    x = event.target.value;
    
    if (!letter(x)) {
        usernameInput.setCustomValidity("Test Regex");
    } 




const form = document.getElementById('myForm');


/*form.addEventListener('submit', (e) => {
    let messages = []
    if (feet.value === '' || feet.value == null) {
        // e.preventDefault();
       //  alert("AAAAAAAAAAAA")
        messages.push('Name is required')
        
    }
    
    if (firstname.value.length > 40) {
        e.preventDefault();
        
    }

    if (lastname.value.length > 1 ) {
        e.preventDefault();
        lastname.setCustomValidity("Last name cannot be over 40 characters.");
    }
    
}) 

firstname.onblur = function validation (event) {
    x = event.target.value;

    if (x > 3) {
        firstname.setCustomValidity("First name cannot be over 40 characters.");
    }
} 
*/
