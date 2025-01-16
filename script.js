function validationForm(event) {
    event.preventDefault();
    var isValid = true;
    var errorIcon = document.querySelectorAll(".errorIcon");
    var errorFName = document.getElementById("errorFName");
    var fName = document.getElementById("fname").value.trim();
    if(fName == ""){
        errorFName.textContent = "First Name cannot be empty";
        errorIcon[0].style.visibility = "visible";
        isValid = false;
    }
    else {
        errorFName.textContent = "";
    }

    var errorLName = document.getElementById("errorLName");
    var lName = document.getElementById("lname").value.trim();
    if(lName == ""){
        errorLName.textContent = "Last Name cannot be empty";
        errorIcon[1].style.visibility = "visible";
        isValid = false;
    }
    else {
        errorLName.textContent = "";
    }

    var errorEmail = document.getElementById("errorEmail");
    var email = document.getElementById("email").value.trim();
    if(email == ""){
        errorEmail.textContent = "Email cannot be empty";
        errorIcon[2].style.visibility = "visible";
        isValid = false;
    }
    else {
        errorEmail.textContent = "";
        if(validateEmail(email)) {
            errorEmail.textContent = "";
        }
        else {
            errorEmail.textContent = "Looks like this is not an email";
            errorIcon[2].style.visibility = "visible";
            isValid = false;
        }
    }

    var errorPass = document.getElementById("errorPass");
    var password = document.getElementById("pass").value.trim();
    if(password == "") {
        errorPass.textContent = "Password cannot be empty";
        errorIcon[3].style.visibility = "visible";
        isValid = false;
    }
    else if(password.length < 8) {
        errorPass.textContent = "Password must be at least 8 characters";
        errorIcon[3].style.visibility = "visible";
        isValid = false;
    }
    else {
        errorPass.textContent = "";
    }

    if(isValid){
        form.submit();   
    }
}

var form = document.getElementById("form");
form.addEventListener("submit", validationForm);

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
