


 function checkboxemailFunction() {
if (document.getElementById("checkboxemail").checked == true) {
localStorage.setItem("checkboxemail", "Email"); 
console.log("SO TRUE")
} else {
localStorage.removeItem("checkboxemail", "Email"); 
console.log("CRINGE")
}

}






window.addEventListener('load', () => {

    
    const params = (new URL(document.location)).searchParams;
    const lastname = params.get('lastname');
    const firstname = params.get('firstname');
    const feet = params.get("feet");
    const inches = params.get("inches");
    const test = localStorage.getItem('checkboxemail');
    
    


    
   

   
   

    document.getElementById('result-lastname').innerHTML = lastname;
    
    document.getElementById('result-firstname').innerHTML = firstname;
    document.getElementById('result-feet').innerHTML = feet + "\"";
    document.getElementById('result-inches').innerHTML = inches + "\'";
    document.getElementById('result-checkboxemail').innerHTML = test;
    
});
















const form = document.getElementById('myForm');


form.addEventListener('submit', (e) => {
    let messages = []
    if (feet.value === '' || feet.value == null) {
        e.preventDefault();
        alert("AAAAAAAAAAAA")
        messages.push('Name is required')
        
    }
    
})



