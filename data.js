
console.log("bleh2");

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
        localStorage.setItem("facebook", "Facebook"); 
        console.log("SO TRUE")
    } else {
        localStorage.removeItem("facebook", "Facebook"); 
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
        
    } else {
        localStorage.removeItem("surfacemail", "Surface Mail"); 
        
    }    
}

function personalvisitFunction() {
    if (document.getElementById("personalvisit").checked == true) {
        localStorage.setItem("personalvisit", "Personal Visit"); 
        
    } else {
        localStorage.removeItem("personalvisit", "Personal Visit"); 
        
    }    
}








window.addEventListener('load', () => {

    // keeps track of how many services are ticked
    var count = 0;

    // keep tracks of parameters from previous page, but only for text inputs
    const params = (new URL(document.location)).searchParams;
    const lastname = params.get('lastname');
    const firstname = params.get('firstname');
    const title = params.get("title");
    const feet = params.get("feet");
    const inches = params.get("inches");
    const useremail = params.get("useremail");
    const phoneNumber = params.get("phonenumber");
    const address = params.get("streetaddress");
    const city = params.get("city");
    const zipcode = params.get("zipcode");
    const budget = params.get("budget");
    

    
    

    // used localStorage as workaround for params not working with checkboxes
    const checkboxemailStore = localStorage.getItem('checkboxemail');
    const phoneStore = localStorage.getItem('phone');
    const facebookStore = localStorage.getItem('facebook');
    const tweeterStore = localStorage.getItem('tweeter');
    const surfacemailStore = localStorage.getItem('surfacemail');
    const personalvisitStore = localStorage.getItem('personalvisit');

    

   
    
    
    


    
   

   
   

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
        document.getElementById('result-inches').innerHTML = inches 
    }
    
    document.getElementById('result-useremail').innerHTML = useremail;
    document.getElementById('result-phonenumber').innerHTML = phoneNumber;
    document.getElementById('result-address').innerHTML = address;
    document.getElementById('result-city').innerHTML = city;
    document.getElementById('result-statezipcode').innerHTML = zipcode;
   
    
    // functions for transferring data from multiple selection survey to results page
    if (checkboxemailStore == null) {
        document.getElementById('result-checkboxemail').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-checkboxemail').innerHTML =  "- " + checkboxemailStore;
    }

    if (phoneStore == null) {
        document.getElementById('result-phone').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-phone').innerHTML = "- " +  phoneStore;
    }

    if (facebookStore == null) {
        document.getElementById('result-facebook').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-facebook').innerHTML = "- " + facebookStore;
    }

    if (tweeterStore == null) {
        document.getElementById('result-tweeter').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-tweeter').innerHTML = "- " + tweeterStore;
    }

    if (surfacemailStore == null) {
        document.getElementById('result-surfacemail').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-surfacemail').innerHTML = "- " +  surfacemailStore;
    }

    if (personalvisitStore == null) {
        document.getElementById('result-personalvisit').innerHTML = "";
        count++;
        console.log(count);
    } else {
        document.getElementById('result-personalvisit').innerHTML = "- " +  personalvisitStore;
    }


    // if count equals 6, ie none are selected on page load, state none are picked
    if (count == 6) {
        document.getElementById('serviceblank').innerHTML = "None selected"
    } else {
        document.getElementById('serviceblank').innerHTML = ""
    }

    document.getElementById('result-budget').innerHTML = budget;

    
       
});

/* window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
        
    }
}; 
*/













