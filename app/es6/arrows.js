describe("arrow function", function () {
    it("provide a compact syntax to define a function", function () {
        let add = (x, y) => x + y;

        let square = (x) => {
            let temp = x * x;
            return temp;
        };

        let three = () => 3;

        let four = square(2);

        expect(add(four, three())).toBe(7);
    });

    it("can be used with array methods", function () {
        var numbers = [1, 2, 3, 4];

        var sum = 0;
        numbers.forEach(n => sum += n);
        expect(sum).toBe(10);

        var doubled = numbers.map(n =>n * 2);
        expect(doubled).toEqual([2, 4, 6, 8]);
    });

    it("lexically binds to 'this'", function (done) {
        this.name = "Zhiping";

        setTimeout(() => {
            expect(this.name).toBe("Zhiping");
            done();
        }, 10);
    });
});