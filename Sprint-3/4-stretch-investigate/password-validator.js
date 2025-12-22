function passwordValidator(password) {
    if (password.length < 5) {
        return false
    }
    let Uppercase = false;
        for(let i = 0; i < password.length; i++) {
            const char = password[i];
            if (char >= "A" && char <= "Z") {
                Uppercase = true;
        }
    }
    if (!Uppercase) return false;


    let lowercase = false;
    for(let i = 0; i < password.length; i++) {
            const char = password[i];
             if (char >= "a" && char <= "z") {
                lowercase = true; 
        }
    }
    if (!lowercase) return false;

      let hasNumber = false;
    for(let i = 0; i < password.length; i++) {
            const char = password[i];
             if (char >= "0" && char <= "9") {
                hasNumber = true;
        }
    }
    if (!hasNumber) return false;

    const specialChar = "!#$%.*&"
     let hasSpecialChar = false;
    for(let i = 0; i < password.length; i++) {
            const char = password[i];
             if (specialChar.includes(char) ) {
                hasSpecialChar = true;
        }
    }
    if (!hasSpecialChar) return false;

    const previousPasswords = ["Abcd34!", "XyZ9$", "Qwer1&"];

if (previousPasswords.includes(password)) {
  return false;
}

    return true;
}

module.exports = passwordValidator;





