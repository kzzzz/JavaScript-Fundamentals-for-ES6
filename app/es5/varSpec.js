"use strict";
"use strict";
describe("How var works in scope", function() {
  var doWork = function(yes) {
    if (yes) {
      var x = 3;
    }
    return x;
  };
  it("should work...", function() {
    var result = doWork(true);
    expect(result).toBe(3);
  });
  it("should not work...", function() {
    var result = doWork(false);
  });
});

//# sourceMappingURL=varSpec.js.map
