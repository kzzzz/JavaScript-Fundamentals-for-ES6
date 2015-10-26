"use strict";
var $__1;
describe("iterator", function() {
  it("can be built by implmenting Symbol.iterator", function() {
    var count = 0;
    var company = new Company();
    company.addEmployees("Jantje", "Pietje", "Klaasje", "Johan");
    for (var $__2 = company[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__3; !($__3 = $__2.next()).done; ) {
      try {
        throw undefined;
      } catch (employee) {
        employee = $__3.value;
        {
          count += 1;
        }
      }
    }
    expect(count).toBe(4);
  });
});
var ArrayIterator = function ArrayIterator(array) {
  this.array = array;
  this.index = 0;
};
($traceurRuntime.createClass)(ArrayIterator, {next: function() {
    var result = {
      value: undefined,
      done: true
    };
    if (this.index < this.array.length) {
      result.value = this.array[$traceurRuntime.toProperty(this.index)];
      result.done = false;
      this.index += 1;
    }
    return result;
  }}, {});
var Company = function Company() {
  this.employees = [];
};
($traceurRuntime.createClass)(Company, ($__1 = {}, Object.defineProperty($__1, "addEmployees", {
  value: function() {
    for (var names = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      $traceurRuntime.setProperty(names, $__4, arguments[$traceurRuntime.toProperty($__4)]);
    this.employees = this.employees.concat(names);
  },
  configurable: true,
  enumerable: true,
  writable: true
}), Object.defineProperty($__1, Symbol.iterator, {
  value: function() {
    return new ArrayIterator(this.employees);
  },
  configurable: true,
  enumerable: true,
  writable: true
}), $__1), {});

//# sourceMappingURL=iterator.js.map
