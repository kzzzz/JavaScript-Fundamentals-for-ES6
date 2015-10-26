describe("iterator", function () {
    it("can be built by implmenting Symbol.iterator", function () {

        let count = 0;
        let company = new Company();

        company.addEmployees("Jantje", "Pietje", "Klaasje", "Johan");

        for (let employee of company) {
            count += 1;
        }

        expect(count).toBe(4);
    });
});


class ArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    next() {
        var result = {value: undefined, done: true};

        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }

        return result;
    }
}

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployees(...names) {
        this.employees = this.employees.concat(names);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.employees)
    }
}

