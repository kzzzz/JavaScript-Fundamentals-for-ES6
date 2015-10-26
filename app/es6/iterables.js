describe("iterables", function () {
    it("can work with iterators at a low level", function () {
        forLoopTest();
        forInTest();
        loopUsingIteratorTest();
    });
});

describe("for of", function () {
    it("can work with iterators at a high level", function () {
        forOfTest();
    });
});
function forLoopTest() {
    let sum = 0;
    let numbers = [1, 2, 3, 4];

    // use index of item
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    expect(sum).toBe(10);
}

function forInTest() {
    let sum = 0;
    let numbers = [1, 2, 3, 4];

    // use index of item
    for (var i in numbers) {
        sum += numbers[i];
    }

    expect(sum).toBe(10);
}

function forOfTest() {
    let sum = 0;
    let numbers = [1, 2, 3, 4];

    // use VALUE of the item
    for (var n of numbers) {
        sum += n;
    }

    expect(sum).toBe(10);
}

function loopUsingIteratorTest() {
    let sum = 0;
    let numbers = [1, 2, 3, 4];

    let iterator = numbers.values();
    let next = iterator.next();

    while (!next.done) {
        sum += next.value;
        next = iterator.next();
    }

    expect(sum).toBe(10);
}