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
});

describe('Order', function() {
  it("Creates an Order", function() {
    var testOrder = new Order();
    expect(testOrder.total).to.equal();
    expect(testOrder.order).to.eql([]);
  });
});
