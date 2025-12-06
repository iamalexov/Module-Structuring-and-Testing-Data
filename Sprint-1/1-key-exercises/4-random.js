const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
<<<<<<< HEAD
// num is a random integer between 1 and 100, inclusive.
// It cannot be greater than 100 because Math.random() never returns 1, so the expression inside Math.floor() never reaches 100.”

// Try breaking down the expression and using documentation to explain what it means:
// 1	Math.random() returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive)
// 2	(maximum - minimum + 1) Calculates the size of the range. With minimum = 1 and maximum = 100 --> (100 - 1 + 1 = 100)
// 3	Math.random() * (maximum - minimum + 1)Gives a random floating-point number between 0 and 100 (not including 100)
//      example:0.999 * 100 = 99.9 - its max, because Math.random() never return 1
// 4	Math.floor(...) Rounds the result down to the nearest integer --> now it’s an integer between 0 and 99
// 5	+ minimum Shifts the range up by minimum (1), so the final result is an integer between 1 and 100.

// So: num is a random whole number from 1 to 100, including both 1 and 100.


// It will help to think about the order in which expressions are evaluated
// (maximum - minimum + 1)) --> Math.random() * --> + minimum  --> Math.floor 

// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)
=======
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
>>>>>>> main
