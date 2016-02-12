describe('Topping', function() {
  it("creates a topping", function() {
    var testTopping = new Topping("pepperoni");
    expect(testTopping.topping).to.equal("pepperoni");
  });
});

describe('Pizza', function() {
  it("Creates a pizza", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql([]);
  });

  it("Generates price for pizza no toppings", function() {
    var smallPizza = new Pizza("Small");
    expect(smallPizza.pizzPrice()).to.eql(10);
    var mediumPizza = new Pizza("Medium");
    expect(mediumPizza.pizzPrice()).to.eql(12);
    var largePizza = new Pizza("Large");
    expect(largePizza.pizzPrice()).to.eql(15);
    var WagonWheel = new Pizza("WagonWheel");
    expect(WagonWheel.pizzPrice()).to.eql(17);
  });

  it("Adds a topping to the pizza", function() {
    var testPizza = new Pizza("Large");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    expect(testPizza.toppings[0].topping).to.eql("pepperoni");
  });

  it("Adds a topping to the pizza", function() {
    var testPizza = new Pizza("Large");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    var testTopping2 = new Topping("olives");
    testPizza.addTopping(testTopping2);
    expect(testPizza.toppings[0].topping).to.eql("pepperoni");
    expect(testPizza.toppings[1].topping).to.eql("olives");
  });

  it("creates topping price for large pizza, one dollar per topping", function() {
    var testPizza = new Pizza("Large");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    var testTopping2 = new Topping("olives");
    testPizza.addTopping(testTopping2);
    expect(testPizza.toppingsPrice()).to.eql(2)
  });

  it("creates topping price for a medium pizza, 75 cents per topping", function() {
    var testPizza = new Pizza("Medium");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    var testTopping2 = new Topping("olives");
    testPizza.addTopping(testTopping2);
    expect(testPizza.toppingsPrice()).to.eql(1.50)
  });

  it("creates topping price for a small pizza, 75 cents per topping", function() {
    var testPizza = new Pizza("Small");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    var testTopping2 = new Topping("olives");
    testPizza.addTopping(testTopping2);
    expect(testPizza.toppingsPrice()).to.eql(1.50)
  });

  it("creates topping price for a WagonWheel Pizza, 1.25 per topping", function() {
    var testPizza = new Pizza("WagonWheel");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    var testTopping2 = new Topping("olives");
    testPizza.addTopping(testTopping2);
    expect(testPizza.toppingsPrice()).to.eql(2.50)
  });

  it("Generates price for small pizza with 2 toppings", function() {
    var testPizza = new Pizza("Small");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    var testTopping2 = new Topping("olives");
    testPizza.addTopping(testTopping2);
    expect(testPizza.pizzPrice()).to.eql(11.50);
  });

  it("Generates price for The WagonWheel with 4 toppings", function() {
    var testPizza = new Pizza("WagonWheel");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    var testTopping2 = new Topping("olives");
    testPizza.addTopping(testTopping2);
    var testTopping3 = new Topping("salami");
    testPizza.addTopping(testTopping3);
    var testTopping4 = new Topping("pineapple");
    testPizza.addTopping(testTopping4);
    expect(testPizza.pizzPrice()).to.eql(22.00);
  });
});

describe('Order', function() {
  it("Creates an order", function() {
    var testOrder = new Order();
    expect(testOrder.total).to.equal();
    expect(testOrder.order).to.eql([]);
  });

  it("adds a pizza to the order", function() {
    var testPizza = new Pizza("WagonWheel");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    testPizza.pizzPrice();
    var testOrder = new Order;
    testOrder.addPizza(testPizza);
    expect(testOrder.order[0].size).to.eql("WagonWheel");
  });

  it("create order total", function() {
    var testPizza = new Pizza("WagonWheel");
    var testTopping = new Topping("pepperoni");
    testPizza.addTopping(testTopping);
    testPizza.pizzPrice();
    var testPizza2 = new Pizza("Large");
    testPizza2.addTopping(testTopping);
    testPizza2.pizzPrice();
    var testOrder = new Order;
    testOrder.addPizza(testPizza);
    testOrder.addPizza(testPizza2);
    testOrder.totalOrder();
    console.log("testing order");
    console.log(testOrder);
  });
});
