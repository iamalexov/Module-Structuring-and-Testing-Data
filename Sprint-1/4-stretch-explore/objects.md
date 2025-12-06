## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
### answer:
Chrome shows something like:
ƒ log() { [native code] }


Now enter just `console` in the Console, what output do you get back?
### answer:
typing just console prints an object with many properties and methods:
assert
: 
ƒ assert()
clear
:...

Try also entering `typeof console`
### answer:
chrome shows:
'object'

Answer the following questions:

What does `console` store?
### answer:
console stores an object that contains many methods (like log, warn, error, etc.) used for debugging

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
### answer:

console.log and console.assert mean that we are accessing a property (a method) of the console object. what we put inside the parentheses will get printed, or logged, to the console.

The console.assert() static method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

. (dot): This is the property accessor operator that separates the object from its property
