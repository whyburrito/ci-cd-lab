const { add, subtract } = require("./calculator");

describe("Calculator Addition and Subtraction", () => {
  test("adding 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtracting 5 - 2 to equal 3", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("handling negative numbers correctly", () => {
    expect(add(-1, -2)).toBe(-3);
    expect(subtract(-5, -2)).toBe(-3);
  });

  test("handling decimal point calculations", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
