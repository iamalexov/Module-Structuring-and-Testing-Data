const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("Then it should return the numeric value corresponding to the rank", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual (5);
})
// Case 3: Handle Face Cards (J, Q, K):
test("should return the value 10, as these cards are worth 10 points", () => {
const valueTen = getCardValue("J♥")
expect(valueTen).toEqual(10);
})
// Case 4: Handle Ace (A):
test("It should, by default, assume the Ace is worth 11 points", () => {
    const valueAce = getCardValue("A♠");
    expect(valueAce).toEqual(11);
})

// Case 5: Handle Invalid Cards:
test("it should throw an error indicating 'Invalid card rank'", () => {
const invalidCard = getCardValue("X♦");
expect(invalidCard).toBe("Invalid card rank.");
})
