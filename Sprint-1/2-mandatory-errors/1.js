// trying to create an age variable and then reassign the value by 1

<<<<<<< HEAD


const age = 33;
// age = age + 1; // This would cause an error because "age" is a const

let changeAge = age +1; // Creates a new variable instead of changing "age"
console.log(changeAge)  //Output: 34

/* 
let age = 33;
age = age + 1; // this is reassignment(age becomes 34)
console.log(age)
 */



/* 
"let changeAge = age + 1" is not a reassignment
It creates a new variable instead of modifying the original "age"
To reassign a value, we must assign a new value to the same variable name:

let age = 33;
age = age + 1; // this is reassignment
*/
=======
const age = 33;
age = age + 1;
>>>>>>> main
