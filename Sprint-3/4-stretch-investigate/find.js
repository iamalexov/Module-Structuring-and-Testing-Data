function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
   // Explanation:
   // it starts at 0
	 // It goes up by 1 on each loop iteration (index++)

// b) What is the if statement used to check
   // Explanation:
   // It checks if the current character is the one we are looking for

// c) Why is index++ being used?
   // Explanation:
   // To move to the next character
	 // Without it, the loop would never stop
// d) What is the condition index < str.length used for?
   // Explanation:
   // -To stop when we reach the end of the string
	 // -So we don’t check characters that don’t exist
