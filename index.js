// sign-in Consts
const signInDiv = document.querySelector(".sign-in-div");
const signInForm = document.querySelector(".sign-in-form");
const btnSignInOne = document.querySelector("#sign-in-div-btn");

// Sign-up consts
const signUpDiv = document.querySelector(".sign-up-div");
const signUpForm = document.querySelector(".sign-up-form");
const btnSignUpOne = document.querySelector("#sign-up-div-btn");

function toDisplayForms(first, second, third, fourth) {
  first.style.visibility = "hidden";
  second.style.visibility = "visible";
  third.style.visibility = "hidden";
  fourth.style.visibility = "visible";
}

// To display Sign up form
btnSignUpOne.addEventListener("click", function () {
  //   signUpDiv.style.visibility = "hidden";
  //   signUpForm.style.visibility = "visible";
  //   signInForm.style.visibility = "hidden";
  //   signInDiv.style.visibility = "visible";
  toDisplayForms(signUpDiv, signUpForm, signInForm, signInDiv);
});

//  To display Sign in form

btnSignInOne.addEventListener("click", function () {
  //   signUpDiv.style.visibility = "visible";
  //   signUpForm.style.visibility = "hidden";
  //   signInForm.style.visibility = "visible";
  //   signInDiv.style.visibility = "hidden";
  toDisplayForms(signUpForm, signUpDiv, signInDiv, signInForm);
});

// Logic for Validation:

// General Functions

// Error Msg
function errorMsg(input, errorMessage) {
  input.style.border = "1px red solid";
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  small.className = "error";
  small.innerText = errorMessage;
}

// Success Msg
function successMsg(input) {
  input.style.border = "1px green solid";
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  small.className = "success";
}

function validEmail(mail) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
}

// Validation Funtions:
// Email Validation
function isEmailValid(email) {
  if (!email.value) {
    errorMsg(email, "Email is required");
  } else if (!validEmail(email.value)) {
    errorMsg(email, "Email is required in Right Form");
  } else {
    successMsg(email);
  }
}

//   PasswordValidation
function isPasswordValid(password) {
  if (!password.value) {
    errorMsg(password, "Password is required");
  } else if (password.value.length < 6) {
    errorMsg(password, "Password Must be more than 6 letters");
  } else {
    successMsg(password);
  }
}

// NameValidation
function isValidName(name) {
  if (!name.value) {
    errorMsg(name, "Name is required");
  } else if (name.value.length < 3) {
    errorMsg(name, "Name Must be at least 3 letters");
  } else {
    successMsg(name);
  }
}

// Validation of Sign in Form:
const signInEmail = document.querySelector("#sign-in-email");
const signInPassword = document.querySelector("#sign-in-password");
const btnSignInTwo = document.querySelector("#sign-in-form-btn");

btnSignInTwo.addEventListener("click", function () {
  isEmailValid(signInEmail);
  isPasswordValid(signInPassword);
});

// Validation of Sign up Form:
const signUpName = document.querySelector("#sign-up-name");
const signUpEmail = document.querySelector("#sign-up-email");
const signUpPassword = document.querySelector("#sign-up-password");
const btnSignUpTwo = document.querySelector("#sign-up-form-btn");

btnSignUpTwo.addEventListener("click", function () {
  isEmailValid(signUpEmail);
  isPasswordValid(signUpPassword);
  isValidName(signUpName);
});
