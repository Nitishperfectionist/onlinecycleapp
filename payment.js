document.querySelector('form').addEventListener("submit", carddata);

function carddata(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the value of the cardNum input field
  let cardNum = document.getElementById('cardNum').value;
  console.log(cardNum);

  // Check if the cardNum is a 16-digit number
  let cardNumPattern = /^\d{16}$/; // Regular expression to match a 16-digit number
  if (cardNumPattern.test(cardNum)) {
    // If cardNum is valid, add a click event listener to the btn element
    var btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      // Redirect to otp.html when the button is clicked
      location.href = "otp.html";
    });
  } else {
    // If cardNum is invalid, show an alert message
    alert("Please enter a valid 16-digit card number.");
  }
}

// Get the cart value from localStorage or set it to 0 if not found
let price = localStorage.getItem('cart_Value') || 0;

// Set the text content of the element with id "price" to display the cart value
document.getElementById('price').textContent = `€ ${price}`;

function home() {
  // Redirect to index.html when the home element is clicked
  location.href = "index.html";
} 