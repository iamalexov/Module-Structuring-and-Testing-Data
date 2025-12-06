let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
<<<<<<< HEAD
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
=======
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
>>>>>>> main

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
<<<<<<< HEAD
// answer:
// - console.log(`The percentage change is ${percentageChange}`);
// - Number(carPrice.replaceAll(",", ""));
// - Number(priceAfterOneYear.replaceAll(",", ""));

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// answer:
// - priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// - The issue is that the second argument in replaceAll is missing a comma.
// - This makes the code invalid JavaScript syntax.

// c) Identify all the lines that are variable reassignment statements
// answer:
// - carPrice = Number(carPrice.replaceAll(",", ""));
// - priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// answer:
// - let carPrice = "10,000";
// - let priceAfterOneYear = "8,543";
// - const priceDifference = carPrice - priceAfterOneYear;
// - const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// answer:
// - 1)	replaceAll(",", "") -> removes all commas from the string "10,000" Result: "10000"
// - 2)	Number("10000") -> converts the cleaned-up string into an actual number Result: 10000
=======

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
>>>>>>> main
