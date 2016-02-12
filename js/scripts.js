function Topping(topping) {
  this.topping = topping;
}

function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price;
}

Pizza.prototype.addTopping = function(topping) {
  return this.toppings.push(topping);
}

Pizza.prototype.pizzPrice = function() {
  var cost = 0;

  if (this.size === "Small") {
    cost = 10.00;
  } else if (this.size === "Medium") {
    cost = 12.00;
  } else if (this.size === "Large") {
    cost = 15.00;
  } else if (this.size === "WagonWheel") {
    cost = 17.00;
  }
  return this.price = cost + this.toppingsPrice();
}

Pizza.prototype.toppingsPrice = function() {
  var size = this.size;
  var toppings = this.toppings.length;
  var toppingCost = 0;

  if (size === "Small" || size === "Medium") {
    toppingCost = 0.75;
  } else if (size === "Large") {
    toppingCost = 1;
  } else if (size === "WagonWheel") {
    toppingCost = 1.25;
  }
  return toppings * toppingCost;
}

function Order() {
  this.total;
  this.order = [];
}
