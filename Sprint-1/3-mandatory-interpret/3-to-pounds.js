const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. const penceStringWithoutTrailingP:
// Creates a new variable and uses the substring() method to return the part of the string from index 0 up to, but not including, the last character. This effectively removes the trailing ‘p’ from the original string

// 3. const paddedPenceNumberString:
// Creates a new variable and uses the padStart() method to ensure the string is at least 3 characters long by adding leading zeros if necessary

// 4. const pounds:
// creates a variable that extracts the pounds portion of the value. The expression length − 2 ensures we take all characters except the last two, which belong to the pence.

// 5. const pence:
// This line works similarly to the pounds variable, but instead it selects the last two characters of the string, which represent the pence. The expression substring(length − 2) extracts the final two digits, and padEnd(2, ‘0’) ensures the pence always has two characters by adding a trailing zero if necessary

// 6. console.log:
// This line logs the final formatted price to the console. It combines the pounds and pence variables into a single string using a template literal, adding the pound symbol at the start and a dot between the pounds and pence
