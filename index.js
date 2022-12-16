let formSubmit = document.getElementById("signup");
let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");

formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();
        formValidationError();
    }
)

function formValidationError() {
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    
    if (passwordValue === '') {
        errorMessage(password, 'Password cannot be empty')
    } else {
        submitForm(password);
    }

    if (emailValue === '') {
        errorMessage(email, 'Email Address cannot be empty')
    } else if(!isEmail(emailValue)) {
        errorMessage(email, "Looks like this is not an email");
    } else {
        submitForm(email);
    }

    if (lNameValue === '') {
        errorMessage(lName, 'Last Name cannot be empty');
    } else {
        submitForm(lName);
    }

    if (fNameValue === '') {
        errorMessage(fName, 'First Name cannot be empty');
    } else {
        submitForm(fName);
    }
}

function errorMessage(input, message) {
    const error = document.querySelector(".error");

    error.innerText = message;

    input.className = "error-message";
}

function submitForm(submitField) {
    const error = document.querySelector(".error");

    error.innerText = "";
    submitField.classList.remove("error-message");
}

function isEmail(email) {
    return /^([a-zA-Z])+\d*[@]\w+.[\w]+/.test(email);
}