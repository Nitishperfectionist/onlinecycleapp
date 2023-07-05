document.querySelector('form').addEventListener("submit", carddata);

function carddata(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const cardNumInput = document.getElementById('cardNum');
  const cvvInput = document.getElementById('cvv');

  
  const email = emailInput.value;
  const cardNum = cardNumInput.value.replace(/\s/g, ''); // Remove whitespace from card number
  const cvv = cvvInput.value;


  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const cardNumPattern = /^\d{16}$/; // Pattern for 16-digit card number
  const cvvPattern = /^\d{3}$/; // Pattern for 3-digit CVV


   if (!emailPattern.test(email)) {
    alert("Please enter a valid Gmail address like example@gmail.com");
    return;
  }

  
  if (!cardNumPattern.test(cardNum)) {
    alert("Please enter a valid 16-digit card number.");
    return;
  }

  if (!cvvPattern.test(cvv)) {
    alert("Please enter a valid 3-digit CVV.");
    return;
  }
 

  var btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    location.href = "otp.html";
  });
}

const price = localStorage.getItem('cart_Value') || 0;
document.getElementById('price').textContent = `€ ${price}`;

function formatCardNumber(e) {
  const input = e.target;
  const trimmedInput = input.value.replace(/\s+/g, ''); // Remove existing whitespaces
  const formattedInput = trimmedInput.replace(/(.{4})/g, '$1 '); // Add space after every 4 characters
  input.value = formattedInput;

  if (formattedInput.length > 19) {
    input.value = formattedInput.slice(0, 19); // Limit to 16 digits
  }
}

function formatCVV(e) {
  const input = e.target;
  const formattedInput = input.value.slice(0, 3); // Limit to 3 digits
  input.value = formattedInput;
}

const cardNumInput = document.getElementById('cardNum');
cardNumInput.addEventListener('input', formatCardNumber);

const cvvInput = document.getElementById('cvv');
cvvInput.addEventListener('input', formatCVV);

function home() {
  location.href = "index.html";
}

