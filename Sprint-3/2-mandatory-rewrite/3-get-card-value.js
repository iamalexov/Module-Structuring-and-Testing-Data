function getCardValue(card) {
    // replace with your code from key-implement
    if (card[0] === "A") return 11;
    else if (card[0] > "2" && card[0] < "9")
      return parseInt(card[0], 10);
    else if (card[0] === "J" || card[0]=== "Q" || card[0] === "K" || card.slice(0, 2)=== "10")
      return 10;
    else {
        return "Invalid card rank."
      }
}
module.exports = getCardValue;