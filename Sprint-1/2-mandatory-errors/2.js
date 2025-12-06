// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
//Error: Cannot access 'cityOfBirth' before initialization
const cityOfBirth = "Bolton";

// Fix: The variable must be declared before it is used
// Correct order:

//const cityOfBirth = "Bolton";
//console.log(`I was born in ${cityOfBirth}`); 

