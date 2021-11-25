var sectionpersonal= document.getElementById('sectionpersonal');
sectionpersonal.style.display = "block";
var tracker = 0;

var lastname = document.getElementById('lastname');
var lastnamecheck = document.getElementById('lastnamecheck');
var lastnameexclamation = document.getElementById('lastnameexclamation'); 
var lastnameerror = document.getElementById('lastnameerror');

lastnamecheck.style.display = "none";
lastnameexclamation.style.display = "none";
lastnameerror.style.display = "none";
var lastnametracker = 1;

window.onload = function() {
  var $recaptcha = document.querySelector('#g-recaptcha-response');

  if($recaptcha) {
      $recaptcha.setAttribute("required", "required");
      
  }
}; 

function lastnameFunction() {
  
  if (lastname.value.length > 40 || lastname.value.length < 1) {
    lastnamecheck.style.display = "none";
    lastnameexclamation.style.display = "inline";
    lastnameerror.style.color = "red";
    lastnameerror.style.display = "inline";
    lastname.style.border = "2px solid red";
    lastnametracker = 1;
    

   
  } else{ 
    lastnamecheck.style.display = "inline";
    lastnameexclamation.style.display = "none";
    lastnameerror.style.color = "green";
    lastnameerror.style.display = "none";
    lastname.style.border = "2px solid green";
    lastnametracker = 0;
    
  }
} 

  
var firstname = document.getElementById('firstname');
var firstnamecheck = document.getElementById('firstnamecheck');
var firstnameexclamation = document.getElementById('firstnameexclamation'); 
var firstnameerror = document.getElementById('firstnameerror');


firstnamecheck.style.display = "none";
firstnameexclamation.style.display = "none";
firstnameerror.style.display = "none";
var firstnametracker = 1;

function firstnameFunction() {
  
  if (firstname.value.length > 40 || firstname.value.length < 1) {
    firstnamecheck.style.display = "none";
    firstnameexclamation.style.display = "inline";
    firstnameerror.style.color = "red";
    firstnameerror.style.display = "inline";
    firstname.style.border = "2px solid red";
    firstnametracker = 1;
  } else{ 
    firstnamecheck.style.display = "inline";
    firstnameexclamation.style.display = "none";
    firstnameerror.style.color = "green";
    firstnameerror.style.display = "none";
    firstname.style.border = "2px solid green";
    firstnametracker = 0;
  }
 
} 
var numbers = new RegExp('^[0-9]');

var feet = document.getElementById('feet');
var feetcheck = document.getElementById('feetcheck');
var feetexclamation = document.getElementById('feetexclamation'); 
var feeterror = document.getElementById('feeterror');

feetcheck.style.display = "none";
feetexclamation.style.display = "none";
feeterror.style.display = "none";


var feettracker = 0;


function feetFunction() {
  if (feet.value) {
    feettracker = 1;
    if (!numbers.test(feet.value) || feet.value > 12) {
      feetcheck.style.display = "none";
      feetexclamation.style.display = "inline";
      feeterror.style.color = "red";
      feeterror.style.display = "inline";
      feet.style.border = "2px solid red";
      feettracker = 1;
    } else{ 
      feetcheck.style.display = "inline";
      feetexclamation.style.display = "none";
      feeterror.style.color = "green";
      feeterror.style.display = "none";
      feet.style.border = "2px solid green";
      feettracker = 0;
  }
  } else {
  feet.style.borderRadius = "6px";
  feeterror.style.display = "none";
  feetexclamation.style.display = "none";
  feetcheck.style.display = "none";
  feet.style.borderColor = "grey";
  feettracker = 0;
}
 

} 


var inches = document.getElementById('inches');
var inchescheck = document.getElementById('inchescheck');
var inchesexclamation = document.getElementById('inchesexclamation'); 
var incheserror = document.getElementById('incheserror');

inchescheck.style.display = "none";
inchesexclamation.style.display = "none";
incheserror.style.display = "none";


var inchestracker = 0;


function inchesFunction() {
  if (inches.value) {
    inchestracker = 1;
    if (!numbers.test(inches.value) || inches.value > 12) {
      inchescheck.style.display = "none";
      inchesexclamation.style.display = "inline";
      incheserror.style.color = "red";
      incheserror.style.display = "inline";
      inches.style.border = "2px solid red";
      inchestracker = 1;
    } else{ 
      inchescheck.style.display = "inline";
      inchesexclamation.style.display = "none";
      incheserror.style.color = "green";
      incheserror.style.display = "none";
      inches.style.border = "2px solid green";
      inchestracker = 0;
    }
  } else {
  inches.style.borderRadius = "6px";
  incheserror.style.display = "none";
  inchesexclamation.style.display = "none";
  inchescheck.style.display = "none";
  inches.style.borderColor = "grey";
  inchestracker = 0;
}
 

} 

var useremail = document.getElementById('useremail');
var emailcheck = document.getElementById('emailcheck');
var emailexclamation = document.getElementById('emailexclamation'); 
var emailerror = document.getElementById('emailerror');

emailcheck.style.display = "none";
emailexclamation.style.display = "none";
emailerror.style.display = "none";

var emailtracker = 1;



function emailFunction() {
  
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(useremail.value))) {
    emailcheck.style.display = "none";
    emailexclamation.style.display = "inline";
    emailerror.style.color = "red";
    emailerror.style.display = "inline";
    useremail.style.border = "2px solid red";
    emailtracker = 1;
  } else{ 
    emailcheck.style.display = "inline";
    emailexclamation.style.display = "none";
    emailerror.style.color = "green";
    emailerror.style.display = "none";
    useremail.style.border = "2px solid green";
    emailtracker = 0;
  }
 

} 

var phonenumber = document.getElementById('phonenumber');
var phonenumbercheck = document.getElementById('phonenumbercheck');
var phonenumberexclamation = document.getElementById('phonenumberexclamation'); 
var phonenumbererror = document.getElementById('phonenumbererror');

phonenumbercheck.style.display = "none";
phonenumberexclamation.style.display = "none";
phonenumbererror.style.display = "none";

var phonenumbertracker = 1;


function phonenumberFunction() {
  // this regex demands properly formatted phone number
if (phonenumber.value) {
    phonenumbertracker = 1;
  
  if (!(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phonenumber.value) )) {
    phonenumbercheck.style.display = "none";
    phonenumberexclamation.style.display = "inline";
    phonenumbererror.style.color = "red";
    phonenumbererror.style.display = "inline";
    phonenumber.style.border = "2px solid red";
    phonenumbertracker = 1;
  } else{ 
    phonenumbercheck.style.display = "inline";
    phonenumberexclamation.style.display = "none";
    phonenumbererror.style.color = "green";
    phonenumbererror.style.display = "none";
    phonenumber.style.border = "2px solid green";
    phonenumbertracker = 0;
  }
 
} else {
  phonenumber.style.borderRadius = "6px";
  phonenumbererror.style.display = "none";
  phonenumberexclamation.style.display = "none";
  phonenumbercheck.style.display = "none";
  phonenumber.style.borderColor = "grey";
  phonenumbertracker = 0;
}

} 




var personalerror = document.getElementById('personalerror');
var personalexclamation = document.getElementById('personalexclamation');
personalerror.style.display = "none";
personalexclamation.style.display = "none";

var onPersonal = 1;


function nextSection() {
  tracker = lastnametracker + firstnametracker + feettracker + inchestracker + emailtracker + phonenumbertracker;
  console.log(tracker);
  if (tracker > 0) {
      personalerror.style.color = "red";
      personalerror.style.display = "inline"
      
    
  
} else {
  sectionpersonal.style.display = "none";
  sectionaddress.style.display ="block";
  personalerror.style.display = "none"
  personalexclamation.style.display = "none"
  console.log(onPersonal);
  personalbutton.style.backgroundColor = "#0955A0";
  addressbutton.style.backgroundColor = "#0D6EFD";
  onPersonal = 0;
  }
}

var personalbutton = document.getElementById("personalbutton");
var addressbutton = document.getElementById("addressbutton");
function personalSection() {
  if (onPersonal == 0) {
    personalbutton.style.backgroundColor = "#0D6EFD";
    addressbutton.style.backgroundColor = "#0955A0";
    sectionpersonal.style.display = "block";
    sectionaddress.style.display ="none";
    personalerror.style.display = "none";
    onPersonal == 1;
    console.log(onPersonal);
  }
}


var streetaddress = document.getElementById('streetaddress');
var streetaddresscheck = document.getElementById('streetaddresscheck');
var streetaddressexclamation = document.getElementById('streetaddressexclamation'); 
var streetaddresserror = document.getElementById('streetaddresserror');

streetaddresscheck.style.display = "none";
streetaddressexclamation.style.display = "none";
streetaddresserror.style.display = "none";
var streetaddresstracker = 1;

function streetaddressFunction() {
  
  if (streetaddress.value.length > 40 || streetaddress.value.length < 1) {
    streetaddresscheck.style.display = "none";
    streetaddressexclamation.style.display = "inline";
    streetaddresserror.style.color = "red";
    streetaddresserror.style.display = "inline";
    streetaddress.style.border = "2px solid red";
    streetaddresstracker = 1;
    

   
  } else{ 
    streetaddresscheck.style.display = "inline";
    streetaddressexclamation.style.display = "none";
    streetaddresserror.style.color = "green";
    streetaddresserror.style.display = "none";
    streetaddress.style.border = "2px solid green";
    streetaddresstracker = 0;
    
  }
} 

var city = document.getElementById('city');
var citycheck = document.getElementById('citycheck');
var cityexclamation = document.getElementById('cityexclamation'); 
var cityerror = document.getElementById('cityerror');

citycheck.style.display = "none";
cityexclamation.style.display = "none";
cityerror.style.display = "none";
var citytracker = 1;

function cityFunction() {
  
  if (city.value.length > 40 || city.value.length < 1) {
    citycheck.style.display = "none";
    cityexclamation.style.display = "inline";
    cityerror.style.color = "red";
    cityerror.style.display = "inline";
    city.style.border = "2px solid red";
    citytracker = 1;
    

   
  } else{ 
    citycheck.style.display = "inline";
    cityexclamation.style.display = "none";
    cityerror.style.color = "green";
    cityerror.style.display = "none";
    city.style.border = "2px solid green";
    citytracker = 0;
    
  }
} 

var zipcode = document.getElementById('zipcode');
var zipcodecheck = document.getElementById('zipcodecheck');
var zipcodeexclamation = document.getElementById('zipcodeexclamation'); 
var zipcodeerror = document.getElementById('zipcodeerror');

zipcodecheck.style.display = "none";
zipcodeexclamation.style.display = "none";
zipcodeerror.style.display = "none";
var zipcodetracker = 1;

function zipcodeFunction() {
  
  if (!numbers.test(zipcode.value) || zipcode.value.length != 5) {
    zipcodecheck.style.display = "none";
    zipcodeexclamation.style.display = "inline";
    zipcodeerror.style.color = "red";
    zipcodeerror.style.display = "inline";
    zipcode.style.border = "2px solid red";
    zipcodetracker = 1;
    

   
  } else{ 
    zipcodecheck.style.display = "inline";
    zipcodeexclamation.style.display = "none";
    zipcodeerror.style.color = "green";
    zipcodeerror.style.display = "none";
    zipcode.style.border = "2px solid green";
    zipcodetracker = 0;
    
  }
} 
var submitTracker = 0;
var submitbutton = document.getElementById("submitdata");
var submitexclamation = document.getElementById("submitexclamation");
var submiterror = document.getElementById("submiterror");


submiterror.style.display = "none";
submitexclamation.style.display = "none"

var acceptterms = document.getElementById('acceptterms');
var acceptbool;
var termserror = document.getElementById('termserror')


termserror.style.display = "none";


window.onload = function() {
  var $recaptcha = document.querySelector('#g-recaptcha-response');

  if($recaptcha) {
      $recaptcha.setAttribute("required", "required");
  }
};


function addresssubmitcheck(event) {
  
  submitTracker = streetaddresstracker + citytracker + zipcodetracker;
  console.log(submitTracker);

  if (acceptterms.checked == true) {
    
    termserror.style.display = "none";
    
    
  } else {
    event.preventDefault();
    termserror.style.color = "red";
    termserror.style.display = "inline";
    return;
  }
  
  
  if (submitTracker > 0)  {
    event.preventDefault();
      submiterror.style.color = "red";
      submiterror.style.display = "inline"
      
    
  
} else {
  
  sectionaddress.style.display ="block";
  submiterror.style.display = "none"
  submitexclamation.style.display = "none"
  }
}




  
  







// make this pop up an error



 // Section Hide
sectionaddress.style.display = "none";
//sectionpersonal.style.display = "none";




  

  

  

  