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


// Function to calculate the password strength
function calculatePasswordStrength() {
  const password = document.getElementById('password').value;
  const passwordStrength = document.querySelector('.password-strength');
  const meter = passwordStrength.querySelector('.meter');
  const text = passwordStrength.querySelector('.text');

  // Calculate the strength score based on password length
  const score = password.length;

  // Remove existing strength classes
  passwordStrength.classList.remove('password-weak', 'password-medium', 'password-strong');

  // Add appropriate strength class based on the score
  if (score <= 4) {
    passwordStrength.classList.add('password-weak');
    text.textContent = 'Weak';
    text.style.color = 'red';
  } else if (score <= 8) {
    passwordStrength.classList.add('password-medium');
    text.textContent = 'Medium';
    text.style.color = 'orange';
  } else {
    passwordStrength.classList.add('password-strong');
    text.textContent = 'Strong';
    text.style.color = 'green';
  }
}

// Event listener to call calculatePasswordStrength function on input change
document.getElementById('password').addEventListener('input', calculatePasswordStrength);
