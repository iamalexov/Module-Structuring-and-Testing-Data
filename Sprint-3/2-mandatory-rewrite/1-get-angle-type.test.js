const getAngleType = require("./1-get-angle-type");

test("should identify Right angle (90°)", () => {
  expect(getAngleType(90)).toBe("Right angle");
});

test("should identify Acute less then 90°", () => {
  expect(getAngleType(35)).toBe("Acute angle");
});


test("should identify Obtuse Angle between 90° and 180°", () => {
  expect(getAngleType(120)).toBe("Obtuse angle");
});


test("should identify Straight Angle 180°", () => {
  expect(getAngleType(180)).toBe("Straight angle");
});


test("should identify Reflex Angle between 180° and 360°", () => {
  expect(getAngleType(270)).toBe("Reflex angle");
});

test("should handle zero angle", () => {
  expect(getAngleType(0)).toBe("Acute angle");
});
