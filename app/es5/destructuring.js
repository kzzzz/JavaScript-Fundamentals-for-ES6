"use strict";
describe("destructuring", function() {
  "use strict";
  it("can destructure arrays", function() {
    var $__0;
    var x = 2;
    var y = 3;
    ($__0 = [y, x], x = $__0[0], y = $__0[1], $__0);
    expect(x).toBe(3);
    expect(y).toBe(2);
  });
  it("can destructure object", function() {});
  it("works with parameters", function() {
    var doWork = function(url, $__0) {
      var data = $__0.data,
          cache = $__0.cache;
      return data;
    };
    var result = doWork("api/test", {
      data: "test data",
      cache: false
    });
    expect(result).toBe("test data");
  });
});

//# sourceMappingURL=destructuring.js.map
