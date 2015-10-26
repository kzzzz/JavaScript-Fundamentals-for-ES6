"use strict";
describe("iterables", function() {
  it("can work with iterators at a low level", function() {
    forLoopTest();
    forInTest();
    loopUsingIteratorTest();
  });
});
describe("for of", function() {
  it("can work with iterators at a high level", function() {
    forOfTest();
  });
});
function forLoopTest() {
  var sum = 0;
  var numbers = [1, 2, 3, 4];
  {
    try {
      throw undefined;
    } catch ($i) {
      $i = 0;
      for (; $i < numbers.length; $i++) {
        try {
          throw undefined;
        } catch (i) {
          i = $i;
          try {
            sum += numbers[$traceurRuntime.toProperty(i)];
          } finally {
            $i = i;
          }
        }
      }
    }
  }
  expect(sum).toBe(10);
}
function forInTest() {
  var sum = 0;
  var numbers = [1, 2, 3, 4];
  for (var i in numbers) {
    sum += numbers[$traceurRuntime.toProperty(i)];
  }
  expect(sum).toBe(10);
}
function forOfTest() {
  var sum = 0;
  var numbers = [1, 2, 3, 4];
  for (var $__0 = numbers[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    var n = $__1.value;
    {
      sum += n;
    }
  }
  expect(sum).toBe(10);
}
function loopUsingIteratorTest() {
  var sum = 0;
  var numbers = [1, 2, 3, 4];
  var iterator = numbers.values();
  var next = iterator.next();
  while (!next.done) {
    sum += next.value;
    next = iterator.next();
  }
  expect(sum).toBe(10);
}

//# sourceMappingURL=iterables.js.map
