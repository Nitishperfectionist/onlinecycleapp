function togglePassword() {
  var passwordInput = document.getElementById("password");
  var passwordToggle = document.getElementById("password-toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    passwordToggle.textContent = "Show";
  }
}

// Add event listener to toggle password visibility
var passwordToggle = document.getElementById("password-toggle");
passwordToggle.addEventListener("click", togglePassword);

// Function to check if passwords match
function checkPasswordMatch() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");
  var confirmPasswordError = document.getElementById("password-error");

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordInput.classList.add("error");
    return false; // Return false if passwords do not match
  } else {
    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.remove("error");
    return true; // Return true if passwords match
  }
}

// Function to calculate the password strength
function calculatePasswordStrength() {
  const password = document.getElementById("password").value;
  const passwordStrength = document.querySelector(".password-strength");
  const meter = passwordStrength.querySelector(".meter");
  const text = passwordStrength.querySelector(".text");

  // Calculate the strength score based on password length
  const score = password.length;

  // Remove existing strength classes
  passwordStrength.classList.remove(
    "password-weak",
    "password-medium",
    "password-strong"
  );

  // Add appropriate strength class based on the score
  if (score <= 4) {
    passwordStrength.classList.add("password-weak");
    text.textContent = "Weak";
    text.style.color = "red";
  } else if (score <= 8) {
    passwordStrength.classList.add("password-medium");
    text.textContent = "Medium";
    text.style.color = "orange";
  } else {
    passwordStrength.classList.add("password-strong");
    text.textContent = "Strong";
    text.style.color = "green";
  }
}

// Event listener to call calculatePasswordStrength function on input change
document
  .getElementById("password")
  .addEventListener("input", calculatePasswordStrength);

// Sign up button click event handler
var signupButton = document.getElementById("signup-button");
var popup = document.getElementById("popup");
var signupForm = document.getElementById("signup-form");

signupButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Check if passwords match
  var passwordsMatch = checkPasswordMatch();

  // Check if any field is blank
  var isFormValid = signupForm.checkValidity();

  if (passwordsMatch && isFormValid) {
    // Show the popup
    popup.style.display = "block";

    // Perform any other necessary actions, such as AJAX request

    // After some time (e.g., 3 seconds), redirect to the login page
    setTimeout(function () {
      window.location.href = "../Signin/signin.html";
    }, 3000);
  } else {
    var formFields = signupForm.elements;
    for (var i = 0; i < formFields.length; i++) {
      var field = formFields[i];
      if (!field.checkValidity()) {
        field.setCustomValidity(""); // Reset any previous custom validity
        if (!field.validity.valid) {
          field.setCustomValidity("Please fill out this field.");

          // Add event listener to reset custom validity on input
          field.addEventListener("input", function () {
            this.setCustomValidity(""); // Reset custom validity on input
          });
        }
      }
    }

    signupForm.reportValidity(); // Display the validation error messages
  }
});

// firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// firebase library data
const firebaseConfig = {
  apiKey: "AIzaSyBWhvmUNJPn6Dp40V2cbp88fhzenmevkoE",

  authDomain: "construct-week-unit-5.firebaseapp.com",

  projectId: "construct-week-unit-5",

  storageBucket: "construct-week-unit-5.appspot.com",

  messagingSenderId: "786633313399",

  appId: "1:786633313399:web:fd8b498caa195036438a72",
};

// Initializing Firebase

const app = initializeApp(firebaseConfig);
console.log(app); // checking if our firebase is connected or not

const auth = getAuth();

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

// Flag to check if there are errors or not
let flag = false;

// Confirm password validation
confirmPassword.addEventListener("input", function () {
  const confirmPasswordValue = confirmPassword.value;
  const passwordValue = password.value;

  if (confirmPasswordValue.length > 0) {
    if (confirmPasswordValue !== passwordValue) {
      passwordError.textContent = "Password does not match!";
      flag = false;
    } else {
      passwordError.textContent = "";
      flag = true;
    }
  } else {
    passwordError.textContent = "Please enter confirm password";
    flag = false;
  }
});

// Form submit event listener
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    if (!flag) {
      alert("Please check input fields");
      return;
    }

    const email = document.getElementById("email").value;
    const passwordValue = password.value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    // Creating a new registration
    createUserWithEmailAndPassword(auth, email, passwordValue)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        ("Signup successful");
        console.log(user);
        document.getElementById("popup").style.display = "block";
        // Perform any additional actions or redirection here

        // Redirect to homepage after 2 seconds
        setTimeout(() => {
          window.location.href = "../Signin/signin.html";
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // Handle error message or display appropriate feedback to the user
      });
  });
