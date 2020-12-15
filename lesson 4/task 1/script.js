var loginForm = document.getElementById('loginForm');
var email = document.getElementById('email');
var password = document.getElementById('password');
var emailValidation = document.getElementById('emailValidation');
var passwordValidation = document.getElementById('passwordValidation');
var button = document.querySelector('[type=submit]');
var isEmailValid = false;
var isPasswordValid = false;

function validateEmailField(event) {
    // 1. Data exist
    // 2. Required symbol @
    if (event.target.value.includes('@')) {
        emailValidation.innerText = '';
        email.style.border = '1px solid #000000';
        isEmailValid = true;
        checkFields();
    } else {
        emailValidation.innerText = 'Check email format (example: test@test.com)';
        email.style.border = '2px solid #ff0d00';
        isEmailValid = false;
        disableButton();
    }

}

function validatePasswordField(event) {
    // 1. Data exist
    // 2. Minimum 4 symbols
    // 3. Maximum 8 symbols
    if (event.target.value.length >= 4 && event.target.value.length <= 8) {
        passwordValidation.innerText = '';
        password.style.border = '1px solid #000000';
        isPasswordValid = true;
        checkFields();
    } else {
        passwordValidation.innerText = 'Password has to include from 4 to 8 symbols';
        password.style.border = '2px solid #ff0d00';
        isPasswordValid = false;
        disableButton();
    }
}

function checkFields() {
    if (isEmailValid && isPasswordValid) {
        enableButton()
    }
}

function disableButton() {
    button.disabled = true;
    button.style.backgroundColor = 'rgba(0, 98, 255, 0.4)';
}

function enableButton() {
    button.disabled = false;
    button.style.backgroundColor = 'rgba(0, 98, 255, 1)';
}

email.addEventListener('input', validateEmailField);
password.addEventListener('input', validatePasswordField);
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
})

disableButton();