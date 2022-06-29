document.querySelector("#form").addEventListener("submit", placeOrder);

function placeOrder(event) {
  event.preventDefault();
  alert(" Your Order is Accepted !");
  setTimeout(cook, 3000);
  setTimeout(ready, 8000);
  setTimeout(out, 10000);
  setTimeout(deliv, 12000);
}

function cook() {
  alert("Your Order is Being Cooked !");
}

function ready() {
  alert("Your Order is Ready !");
}

function out() {
  alert("order out for Delivery !");
}

function deliv() {
  alert("Order Delivered :)");
}
