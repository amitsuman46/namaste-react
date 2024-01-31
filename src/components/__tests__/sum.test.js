const { sum } = require("../sum");

test("Sum function should calculate the sum of two function", () => {
  const result = sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});
