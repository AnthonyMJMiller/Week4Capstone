var items = [" Phone Charger", " Space Heater", " Headphones", " Fan"];

var prices = [8.99, 24.79, 14.99, 22.99];

var shoppingCart = [];
var shoppingPrice = [];
var total = 0;

var checkoutStore = document.getElementById("checkoutCart");

function addToCart(items) {
  shoppingCart.push(items);
  printCart(shoppingCart);
  
}

function addToPrice(prices) {
  shoppingPrice.push(prices);
  addToTotal(shoppingPrice);
}

function printCart(shoppingCart) {
  for (var i = 0; i < shoppingCart.length; i++) {
    document.getElementById("cartitems").innerHTML = shoppingCart;
  }
}

function addToTotal(shoppingPrice) {
  for (var i = 0; i < shoppingPrice.length; i++){
    total += shoppingPrice[i];
  }
 checkoutStore.onclick = function(){ var taxTotal = (total + (total * .06));
  var grandTotal = "$" + parseFloat(taxTotal).toFixed(2);
 
  document.getElementById("fullcost").innerHTML = "Your total (plus tax) is: " + grandTotal;
   }
}