// Predict and explain first...

// Predict the output of the following code:
// This function is supposed to take a number as a parameter and return the last digit of that number 

/* const num = 103;



function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */



// Now run the code and compare the output to your prediction
// The last digit of 42 is 3
// VM875:8 The last digit of 105 is 3
// VM875:9 The last digit of 806 is 3


// Explain why the output is the way it is
// the function does not work because it never uses the value passed into it
// It always uses the global variable num, which is set 103 


// Finally, correct the code to fix the problem
// =============> write your new code here:

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// getLastDigit is not working properly because the function does not accept any parameters
// In JS, if a function has no parameters, it cannot use the value passed into it(such as 42, 105, 806)
// Instead, the function always uses the global variable num, which is 103
// As a result, it always returns the last digit of the same number, which is not the behavior
