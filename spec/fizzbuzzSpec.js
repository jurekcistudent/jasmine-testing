describe("My fizzBuzz function", function() {
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return Fizz when called as fizzBuzz(6)", function() {
            var result = fizzBuzz(6)
            expect(result).toBe("Fizz");
        });

        it("should return Buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return 7 when called as fizzBuzz(7)", function() {
            var result = fizzBuzz(7)
            expect(result).toBe(7);
        });
    });
});