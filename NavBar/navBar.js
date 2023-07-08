document.addEventListener("DOMContentLoaded", function () {
  var userPic = document.getElementById("userPic");
  userPic.addEventListener("click", toggleMenu);

  function toggleMenu() {
    subMenu.classList.toggle("open-menu");
  }
});


// ========================== debouncing ========================================================================================

// Function to perform the search based on the entered title
// Function to perform the search based on the entered title
function searchByTitle(title) {
  // Check if the title is empty
  if (title.trim() === "") {
    // Clear the search results dropdown
    renderSearchResults([]);
    return;
  }

  // Fetch the JSON data
  fetch("https://slate-gray-fox-belt.cyclic.app/data")
    .then(response => response.json())
    .then(data => {
      // Filter the data based on the entered title
      const results = data.filter(item =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );

      // Render search results in the dropdown
      renderSearchResults(results);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Function to render search results in the dropdown
function renderSearchResults(results) {
  const searchResultsDropdown = document.getElementById("search-results");

  // Clear the search results dropdown
  searchResultsDropdown.innerHTML = "";

  // Hide the search results box if the results array is empty
  if (results.length === 0) {
    searchResultsDropdown.style.display = "none";
    return;
  }

  // Show the search results box
  searchResultsDropdown.style.display = "block";

  // Create and append option elements for each result
  results.forEach(result => {
    const option = document.createElement("option");
    option.value = result.id;
    option.textContent = result.title;
    searchResultsDropdown.appendChild(option);
  });
}

function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function handleSearchInput(event) {
  const enteredTitle = event.target.value;
  debouncedSearch(enteredTitle);
}

const searchInput = document.getElementById("search-input");
const searchResultsDropdown = document.getElementById("search-results");

const debounceDelay = 500;
const debouncedSearch = debounce(searchByTitle, debounceDelay);

searchInput.addEventListener("keyup", handleSearchInput);


// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    const userName = user.email;
    document.getElementById("loginOption").style.display = "none";
    document.querySelector(".auth-user-pic").style.display = "block";
    document.querySelector(".user-info h3").textContent = userName; // Updating the user name in the HTML

    // ...
  } else {
    // User is signed out
    console.log("user signed out");
    document.getElementById("loginOption").style.display = "block";
    document.querySelector(".auth-user-pic").style.display = "none";
    // ...
  }
});
let loginbutton = document.getElementById("loginOption");
loginbutton.addEventListener("click", function () {
  // Redirect to the login page
  window.location.href = "../Signin/signin.html";
});

function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "../Signin/signin.html"; // Redirect to the login page after signout
    })
    .catch((error) => {
      // An error happened.
      console.log("Sign-out error:", error);
    });
}

const logoutButton = document.getElementById("logoutButton");

// Add click event listener to the logout button
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "../Signin/signin.html"; // Redirect to the login page after signout
    })
    .catch((error) => {
      // An error happened.
      console.log("Sign-out error:", error);
    });
});
