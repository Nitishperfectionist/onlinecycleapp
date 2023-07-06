let sumMRP = 0; // Variable to store the total MRP
let data = JSON.parse(localStorage.getItem("cart-list")) || []; // Retrieve cart data from local storage or initialize as empty array if not found

let cartItem = document.querySelector("#cart"); // Reference to the cart element
let sum = 0; // Variable to store the total price

function displayCart(data) {
  document.querySelector("#cart").textContent = ""; // Clear the cart element before displaying items
  console.log(data, sum);
  data.map((ele, i) => {
    // Iterate through each item in the cart data

    let div = document.createElement("div"); // Create a div element for each cart item
    div.id = "mainDiv";

    let divImg = document.createElement("div"); // Div for item image
    divImg.id = "imgDiv";

    let img = document.createElement("img"); // Item image
    img.src = ele.img;

    let divDetails = document.createElement("div"); // Div for item details
    divDetails.id = "detail";

    let productdescriptionname = document.createElement("h4"); // Item name
    productdescriptionname.textContent = ele.productdescriptionname;

    let code = document.createElement("p"); // Item code
    code.textContent = "2456155";

    let MRP = document.createElement("p"); // MRP (Maximum Retail Price)
    MRP.textContent = "₹ " + ele.mrp;
    MRP.id = "displayMRPCart";

    let mrp = document.createElement("p"); // Price
    mrp.textContent = "₹ " + ele.price;
    mrp.id = "displayMRPfynl";

    let qty = document.createElement("div"); // Quantity container

    let disc = document.createElement("button"); // Decrease quantity button
    disc.textContent = "-";

    let qnty = document.createElement("input"); // Quantity input field
    qnty.value = "1";

    let add = document.createElement("button"); // Increase quantity button
    add.textContent = "+";

    let divFinalmrp = document.createElement("div"); // Div for final price

    let finmrp = document.createElement("p"); // Final price
    sum += ele.price; // Update the total price
    sumMRP += ele.mrp; // Update the total MRP
    finmrp.textContent = "₹ " + ele.price * qnty.value;

    // Event listener for decreasing quantity
    disc.addEventListener("click", function () {
      if (qnty.value == 1) {
        alert("Minimum Quantity could be 1");
      } else {
        qnty.value--;
        sum -= ele.price; // Decrease the total price
        sumMRP -= ele.mrp; // Decrease the total MRP
        finmrp.textContent = "₹ " + ele.price * qnty.value;
        localStorage.setItem("cart_Value", sum);

        document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
        document.getElementById("finalAmt").textContent = "₹ " + sum;
      }
    });

    // Event listener for increasing quantity
    add.addEventListener("click", function () {
      qnty.value++;
      sum += ele.price; // Increase the total price
      sumMRP += ele.mrp; // Increase the total MRP
      finmrp.textContent = "₹ " + ele.price * qnty.value;

      document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
      document.getElementById("finalAmt").textContent = "₹ " + sum;
      localStorage.setItem("cart_Value", sum);
    });

    let delet = document.createElement("div"); // Div for delete button
    let del = document.createElement("button"); // Delete button
    del.id = "delcart";
    let delimg = document.createElement("img"); // Delete button icon
    delimg.src = "delet.svg";
    delimg.id = "dellogo";

    // Event listener for deleting an item from the cart
    del.addEventListener("click", function () {
      data.splice(i, 1); // Remove the item from the cart data
      sum -= ele.price; // Decrease the total price
      sumMRP -= ele.mrp; // Decrease the total MRP
      localStorage.setItem("cart", JSON.stringify(data));

      document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
      document.getElementById("finalAmt").textContent = "₹ " + sum;
      displayCart(data); // Redisplay the cart items
    });

    divImg.append(img);
    del.append(delimg);
    divDetails.append(productdescriptionname, code, MRP, mrp);
    qty.append(disc, qnty, add);
    divFinalmrp.append(finmrp);
    delet.append(del);
    div.append(divImg, divDetails, qty, divFinalmrp, delet);
    cartItem.append(div);

    localStorage.setItem("cart_Value", sum);

    document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
    document.getElementById("finalAmt").textContent = "₹ " + sum;
  });
}

displayCart(data); // Display the cart items

function home() {
  location.href = "../index.html"; // Redirect to the home page
}
