function togglePasswordVisibility() {
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

// signup validation if password is not matching

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

//signup button enablinging after checkobx are ticked
function checkSignupButton() {
  var termsConditionsCheckbox = document.getElementById("terms-conditions");
  var termsOfUseCheckbox = document.getElementById("terms-of-use");
  var signupButton = document.getElementById("signup-button");

  if (termsConditionsCheckbox.checked && termsOfUseCheckbox.checked) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
}

// function to display error message and disable signup button if checkboxes are not checked

function checkSignupButton() {
  var termsConditions = document.getElementById("terms-conditions");
  var termsOfUse = document.getElementById("terms-of-use");
  var signupButton = document.getElementById("signup-button");
  var termsConditionsError = document.getElementById("terms-conditions-error");
  var termsOfUseError = document.getElementById("terms-of-use-error");

  if (!termsConditions.checked) {
    termsConditionsError.textContent = "Please check the Terms & Conditions";
  } else {
    termsConditionsError.textContent = "";
  }

  if (!termsOfUse.checked) {
    termsOfUseError.textContent = "Please check the Terms of Use";
  } else {
    termsOfUseError.textContent = "";
  }

  signupButton.disabled = !(termsConditions.checked && termsOfUse.checked);
}
