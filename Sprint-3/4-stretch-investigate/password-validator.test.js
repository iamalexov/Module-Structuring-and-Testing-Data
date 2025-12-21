/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/


const passwordValidator = require("./password-validator");
/* test("password has at least 5 characters", () => {
    // Arrange
    const password = "12345";
    // Act
    const result = passwordValidator(password);
    // Assert
    expect(result).toEqual(true);
}
); */


/*  test("password must contain at least 5 characters", () => {
  expect(passwordValidator("Abcde")).toEqual(true);
});  */

test("password must contain at least one lowercase letter", () => {
  expect(passwordValidator("ABCD!")).toEqual(false);
  expect(passwordValidator("Abcd3t!")).toEqual(true);    
});

test ("Must not be any previous password in the passwords array", () => {
  expect(passwordValidator("Abcd3!")).toEqual(false); 
  expect(passwordValidator("NewP4ss!")).toEqual(true); 
});



/* test("password must contain at least one number (0-9)", () => {
  expect(passwordValidator("Abcde")).toEqual(false);   //no numbers
  expect(passwordValidator("Abcd3")).toEqual(true);    
}); */