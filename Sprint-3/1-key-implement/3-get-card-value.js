// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
     if (card[0] === "A") return 11;
    else if (card[0] > "2" && card[0] < "9")
      return parseInt(card[0], 10);
    else if (card[0] === "J" || card[0]=== "Q" || card[0] === "K" || card.slice(0, 2)=== "10")
      return 10;
    else {
        return "Invalid card rank."
      }
}

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(fiveofHearts, 5);


// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const valueTen = getCardValue("J♥")
assertEquals(valueTen, 10)

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
const valueAce = getCardValue("A♠");
assertEquals(valueAce, 11);

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
const invalidCard = getCardValue("X♦");
assertEquals(invalidCard,"Invalid card rank.")




/* // Refactoring :
 function getCardValue(card) {
//  Extract the card rank (everything except the suit)
const rank = card.slice(0, -1); // remove the last character(emoji) and keep only the rank

//  Handle Ace (Checks if the card rank is exactly "A" (Ace)):
if (rank === "A") { //In blackjack, an Ace is worth 11 points by default
    return 11;
  }

// Handle face cards and 10(Checks if the card is a King, Queen, Jack, or 10)
if (rank === "K" || rank === "Q" || rank === "J" || rank === "10") {
    return 10;
  }

// Handle number cards (2–9)
  const number = parseInt(rank, 10); // Converts the string rank into a number using base 10
if (number >= 2 && number <= 9) {
    return number;
  }

// Handle invalid cards
  return "Invalid card rank";
}

// assertEquals -This is a function name. It is a helper function used to compare two values
// getCardValue - The function that calculates the numeric value of a playing card
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("5♥"), 5);
assertEquals(getCardValue("J♦"), 10);
assertEquals(getCardValue("10♣"), 10);
assertEquals(getCardValue("X♠"), "Invalid card rank."); */
