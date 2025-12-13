// Predict and explain first...
// the function should return the percentage value of the input decimal number 

// Why will an error occur when this program runs?
// =============> The error happens because decimalNumber is redeclared with const, so its value becomes static and cannot be changed.
// 

// Try playing computer with the example to work out what is going on


/* function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
 */


// =============> write your explanation here

// The function takes decimalNumber as an argument, but then redeclares decimalNumber with const inside the f-n, which overwrites the original value
// It also creates percentage using a template string with decimalNumber * 100to calculate the percentage



// Finally, correct the code to fix the problem
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.2));


