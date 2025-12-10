
// Predict and explain first BEFORE you run any code...
// answer:
// This function takes a number as an argument and returns the square of that number.
// It does this by multiplying the argument num by itself (num * num)


// this function should square any number but instead we're going to get an error

// =============> the f-n will be syntax error; F-n parameters must be variable names, not numbers


/* function square(3) {
    return num * num;
} */

// =============> write the error message here: 
// VM541:1 Uncaught SyntaxError: Unexpected number

// =============> explain this error message here:
// Means that JavaScript found a number in a place where a number is not allowed
// So JS says: 'I don’t expect to see a number here' and throws a syntax error

// Finally, correct the code to fix the problem

// =============> write your new code here:
function square(num) {
    return num * num;
}
console.log(square(3))


