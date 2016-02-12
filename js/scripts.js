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
  $("form#order").submit(function(event) {
    event.preventDefault();
    newOrder = new Order();
    console.log(newOrder)
  });

  // $('.row').on("click", ".squares", function() {
  //   space = (new_game.board.nBoard[parseInt(this.id)]);
  //   turn = new_game.changeTurn();
  //   player = new_game.players[turn];
  //   player.markSpace(space);
  //   $(this).text(player.mark).removeClass("squares");
  //
  //   if (new_game.board.threeInARow(player)) {
  //     if(confirm(player.mark + ' is the winner!')) {
  //       location.reload();
  //       console.log(new_game.board.nBoard)
  //     }
  //   }
  });
});
