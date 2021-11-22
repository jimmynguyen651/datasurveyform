


// functions on click in datasurveyform.html to add to localStorage
function checkboxemailFunction() {
    if (document.getElementById("checkboxemail").checked == true) {
        localStorage.setItem("checkboxemail", "Email"); 
        console.log("SO TRUE")
    } else {
        localStorage.removeItem("checkboxemail", "Email"); 
        console.log("CRINGE")
    }    
}

function phoneFunction() {
    if (document.getElementById("phone").checked == true) {
        localStorage.setItem("phone", "Phone"); 
        console.log("SO TRUE")
    } else {
        localStorage.removeItem("phone", "Phone"); 
        console.log("CRINGE")
    }    
}

function facebookFunction() {
    if (document.getElementById("facebook").checked == true) {
        localStorage.setItem("facebook", "facebook"); 
        console.log("SO TRUE")
    } else {
        localStorage.removeItem("facebook", "facebook"); 
        console.log("CRINGE")
    }    
}

function tweeterFunction() {
    if (document.getElementById("tweeter").checked == true) {
        localStorage.setItem("tweeter", "Tweeter"); 
        console.log("SO TRUE")
    } else {
        localStorage.removeItem("tweeter", "Tweeter"); 
        console.log("CRINGE")
    }    
}

function surfacemailFunction() {
    if (document.getElementById("surfacemail").checked == true) {
        localStorage.setItem("surfacemail", "Surface Mail"); 
        console.log("SO TRUE")
    } else {
        localStorage.removeItem("surfacemail", "Surface Mail"); 
        console.log("CRINGE")
    }    
}

function personalvisitFunction() {
    if (document.getElementById("personalvisit").checked == true) {
        localStorage.setItem("personalvisit", "SPersonal Visit"); 
        console.log("SO TRUE")
    } else {
        localStorage.removeItem("personalvisit", "Personal Visit"); 
        console.log("CRINGE")
    }    
}








window.addEventListener('load', () => {

    // keeps track of how many services are ticked
    var count = 0;

    // keep tracks of parameters from previous page, but only for text inputs
    const params = (new URL(document.location)).searchParams;
    const lastname = params.get('lastname');
    const firstname = params.get('firstname');
    const feet = params.get("feet");
    const inches = params.get("inches");
    const phoneNumber = params.get("phonenumber");
    const address = params.get("address");
    const city = params.get("city");
    const zipcode = params.get("zipcode");

    const title = params.get("title");
    

    // used localStorage as workaround for params not working with checkboxes
    const checkboxemailStore = localStorage.getItem('checkboxemail');
    const phoneStore = localStorage.getItem('phone');
    const facebookStore = localStorage.getItem('facebook');
    const tweeterStore = localStorage.getItem('tweeter');
    const surfacemailStore = localStorage.getItem('surfacemail');
    const personalvisitStore = localStorage.getItem('personalvisit');

    const budget = params.get('budget');
    const useremail = params.get('useremail');
    
    
    


    
   

   
   

    document.getElementById('result-lastname').innerHTML = lastname;
    document.getElementById('result-firstname').innerHTML = firstname;
    document.getElementById('result-title').innerHTML = title;

   
    if (feet == "") {
        document.getElementById('result-feet').innerHTML = "Not ";
    } else {
        document.getElementById('result-feet').innerHTML = feet + "\'";
    }

    if (inches == "") {
        document.getElementById('result-inches').innerHTML = " filled";
    } else {
        document.getElementById('result-inches').innerHTML = inches + "\"";
    }
    
    
    document.getElementById('result-phonenumber').innerHTML = phoneNumber;
   
    
    // functions for transferring data from multiple selection survey to results page
    if (checkboxemailStore == null) {
        document.getElementById('result-checkboxemail').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-checkboxemail').innerHTML = checkboxemailStore;
    }

    if (phoneStore == null) {
        document.getElementById('result-phone').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-phone').innerHTML = phoneStore;
    }

    if (facebookStore == null) {
        document.getElementById('result-facebook').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-facebook').innerHTML = facebookStore;
    }

    if (tweeterStore == null) {
        document.getElementById('result-tweeter').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-tweeter').innerHTML = tweeterStore;
    }

    if (surfacemailStore == null) {
        document.getElementById('result-surfacemail').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-surfacemail').innerHTML = surfacemailStore;
    }

    if (personalvisitStore == null) {
        document.getElementById('result-personalvisit').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-personalvisit').innerHTML = personalvisitStore;
    }


    // if count equals 6, ie none are selected on page load, state none are picked
    if (count == 6) {
        document.getElementById('serviceblank').innerHTML = "None selected"
    } else {
        document.getElementById('serviceblank').innerHTML = ""
    }

    document.getElementById('result-budget').innerHTML = budget;

    document.getElementById('result-useremail').innerHTML = useremail;
       
});

/* window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
        
    }
}; */











// validation

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
