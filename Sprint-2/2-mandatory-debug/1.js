// Predict and explain first...
// The function is supposed to return the sum of two numbers, but it does not work correctly because the return statement is used improperly.



/* function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); */



// There is semicolon right after return, so the function returns immediately and the expression a + b is never executed
// The sum of 10 and 32 is undefined

// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
