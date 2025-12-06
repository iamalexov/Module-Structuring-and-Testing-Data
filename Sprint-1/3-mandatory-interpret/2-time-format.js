const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// answer:
// 1) const movieLength = 8784  
// 2) const remainingSeconds...
// 3) const totalMinutes ...
// 4) const remainingMinutes...
// 5) const totalHours...
// 6) const result...

// b) How many function calls are there?
// answer:
// console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// answer:
//  - The expression movieLength % 60 returns the remainder after dividing the number of seconds by 60
//  - This gives you the number of leftover seconds that do not make up a full minute


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// answer:
// totalMinutes represents the total number of full minutes in the movie
// It takes the movie length in seconds and converts it into minutes by removing the leftover seconds


// e) What do you think the variable result represents? Can you think of a better name for this variable?
// answer:
// result represents the final formatted time string in the format hours:minutes:seconds
// for my case, the better name for this variable is: timeString 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// answer:

// Yes, the code works correctly for any positive number of seconds.
// Depending on the value of movieLength, the resulting time string may appear without leading zeros, such as:
// 1:8:16
