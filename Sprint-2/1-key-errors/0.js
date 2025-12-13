// Predict and explain first...
//  =============> The function should take a string, make the first letter uppercase, and then add the rest of the string starting from the second character.
// To do this, should use the slice() function

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


  /*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str; */




// =============> The error occurs because the variable str is declared twice
// JS does not allow redeclaring the same variable  name in the same scope. To fix this,
// we can either use a different variable name or assign directly to str instead of redeclaring it

// =============> write your new code here:
  function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
return str;

}   

console.log(capitalise("alex"));
