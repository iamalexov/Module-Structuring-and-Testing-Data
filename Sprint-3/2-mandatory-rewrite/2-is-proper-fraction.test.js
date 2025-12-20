const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toBe(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(3, 2)).toBe(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-2, 3)).toBe(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for when numerator equals denominator", () => {
  expect(isProperFraction(2, 2)).toEqual(false);
});
