const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('pass');
const passConf = document.getElementById('pass_conf');
const submitButton = document.getElementById('submit-button');
let valid = false;

console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    if(valid) {
        setTimeout(function () {form.submit()}, 2000);
        submitButton.disabled = true;
        submitButton.innerHTML = 'Success!';
        submitButton.style.backgroundColor = "#82a067";
    }
})

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim(); 
    const passValue = pass.value.trim();
    const passConfValue = passConf.value.trim();

    if(firstNameValue === '') {
        setErrorFor(firstName,'*First name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName,'*Last name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    if(emailValue === '') {
        setErrorFor(email,'*Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, '*Please enter a valid email address');
    } else {
        setSuccessFor(email);
    }

    if(phoneValue === '') {
        setErrorFor(phone,'*Phone number cannot be blank');
    } else {
        setSuccessFor(phone);
    }

    if(passValue === '') {
        setErrorFor(pass, '*Password cannot be blank');
        setErrorFor(passConf, '');
    } else if(passValue !== passConfValue) {
        setErrorFor(pass, '*Passwords do not match');
        setErrorFor(passConf, '');
    } else if(passValue === passConfValue) {
        setSuccessFor(pass);
        setSuccessFor(passConf);
    }
    console.log(firstName.parentElement.classList);

    if(firstName.parentElement.classList.contains('success')
    && lastName.parentElement.classList.contains('success')
    && email.parentElement.classList.contains('success')
    && phone.parentElement.classList.contains('success')
    && pass.parentElement.classList.contains('success')
    && passConf.parentElement.classList.contains('success')) {
        valid = true;
        console.log(valid);
    }
}

function setErrorFor(input, message) {
    const formInput = input.parentElement;
    const small = formInput.querySelector('small');

    console.log(formInput);

    small.innerText = message;

    formInput.className = 'form-input error';
}

function setSuccessFor(input) {
    const formInput = input.parentElement;

    formInput.className = 'form-input success';

}

function clearErrorFor(input1, input2) {
    const formInput1 = input1.parentElement;
    const formInput2 = input2.parentElement;

    formInput1.className = 'form-input';
    formInput2.className = 'form-input';
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}