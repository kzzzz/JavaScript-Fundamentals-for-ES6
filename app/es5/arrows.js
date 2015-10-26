"use strict";
describe("arrow function", function() {
  it("provide a compact syntax to define a function", function() {
    var add = (function(x, y) {
      return x + y;
    });
    var square = (function(x) {
      var temp = x * x;
      return temp;
    });
    var three = (function() {
      return 3;
    });
    var four = square(2);
    expect(add(four, three())).toBe(7);
  });
  it("can be used with array methods", function() {
    var numbers = [1, 2, 3, 4];
    var sum = 0;
    numbers.forEach((function(n) {
      return sum += n;
    }));
    expect(sum).toBe(10);
    var doubled = numbers.map((function(n) {
      return n * 2;
    }));
    expect(doubled).toEqual([2, 4, 6, 8]);
  });
  it("lexically binds to 'this'", function(done) {
    var $__0 = this;
    this.name = "Zhiping";
    setTimeout((function() {
      expect($__0.name).toBe("Zhiping");
      done();
    }), 10);
  });
});

//# sourceMappingURL=arrows.js.map
