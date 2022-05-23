var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function createPass() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYW"
    var special = "!@#$%^&*(){}[]<>=-_+/?~|"
    var number = "0123456789"
    var characterSet = "";
    var password = "";
    
    var passwordLength = prompt(
        "How many characters would you like your password to contain? Enter a value between 8 to 128"
    );
   
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid answer. Password must contain between 8 to 128 characters.");        
        return;

    } else {

        var specialChar = confirm(
            "Click OK to confirm including special characters"
        );
        var numericChar = confirm(
            "Click OK to confirm including numeric characters"
        );
        var lowerCaseChar = confirm(
            "Click OK to confirm including lowercase characters"
        );
        var upperCaseChar = confirm(
            "Click OK to confirm including uppercase characters"
        );
    }

    if (lowerCaseChar) {
        characterSet += lowercase;
    }
    if (upperCaseChar) {
        characterSet += uppercase;
    }
    if (specialChar) {
        characterSet += special;
    }
    if (numericChar) {
        characterSet += number;
    }
   
    for (i = 0; i < passwordLength; i++) {

        password += characterSet[Math.floor(Math.random() * characterSet.length)]
    }
    return(password);
}


function writePassword(password) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = password;
}


generateBtn.addEventListener("click", function () { writePassword(createPass()) });