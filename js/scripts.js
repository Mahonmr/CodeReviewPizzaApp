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
    toppingCost = 1.00;
  } else if (size === "WagonWheel") {
    toppingCost = 1.25;
  }
  return toppings * toppingCost;
}

function Order() {
  this.total;
  this.order = [];
}

Order.prototype.addPizza = function(pizza) {
  return this.order.push(pizza);
}

Order.prototype.totalOrder = function() {
  var orderTotal = 0;

  for (var i = 0; i < this.order.length; i += 1) {
    orderTotal += this.order[i].price;
  }
  return this.total = orderTotal;
}

$(document).ready(function() {
  $("#add-topping").click(function() {
    $("#new-toppings").append('<div class="new-topping">' +
    '<div class="form-group">' +
    '<label>Topping</label>' +
    '<select class="form-control">' +
    '<option value="" selected disabled>Please select</option>' +
    '<option class="form-control topping" value="Pepperoni">Pepperoni</option>' +
    '<option class="form-control topping" value="Sausage">Sausage</option>' +
    '<option class="form-control topping" value="Extra Cheese">Extra Cheese</option>' +
    '<option class="form-control topping" value="Olives">Olives</option>' +
    '<option class="form-control topping" value="Pineapple">Pineapple</option>' +
    '<option class="form-control topping" value="Canadain Bacon">Canadian Bacon</option>' +
    '</select>' +
    '</div>' +
    '</div>');
  });


  $("form#new_order").submit(function(event) {
    event.preventDefault();
    order = new Order();
    pizza = new Pizza($(".new-pizza").find("option:selected").val());
    console.log(pizza);

    $(".new-topping").each(function() {
      var topping = $(this).find("option:selected").val();
      pizza.addTopping(new Topping(topping))
    });
    pizza.pizzPrice();
  });
});
