describe("how let works", function () {
    var doWork = function (yes) {
        if (yes) {
            var x = 3;
        }
        return x;
    };

    it("will provide block scoping, unlike var", function () {
        var result = doWork(true);
        expect(result).toBe(3);
    });

    it("will provide block scoping with for", function () {

        var doWork = function () {
            for (var i = 0; i < 10; i++) {
            }

            return i;
        };
        var result = doWork();

        expect(result).toBe(10);
    });
});