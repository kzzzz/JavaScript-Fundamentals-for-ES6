describe("destructuring", function () {
    "use strict";

    it("can destructure arrays", function () {
        let x = 2;
        let y = 3;

        [x, y] = [y, x];

        expect(x).toBe(3);
        expect(y).toBe(2);
    });

    it("can destructure object", function () {
        //let getPerson = function () {
        //    return {
        //        firstName: "Zhiping",
        //        lastName: "Liu"
        //    };
        //};
        //
        //let {
        //    firstName: fn,
        //    lastName: ln
        //    } = getPerson();

        //expect(firstName).toBe("Zhiping");
        //expect(lastName).toBe("Liu");
    });

    it("works with parameters", function () {
        //function doWork(url, params) {
        //    return params.data;
        //}

        let doWork = function (url, {data, cache}) {
            return data;
        };

        let result = doWork("api/test", {
            data: "test data",
            cache: false
        });

        expect(result).toBe("test data");
    });
});