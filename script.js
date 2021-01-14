// Assignment Code/Variable Declaration 
var generateBtn = document.querySelector("#generate");
var confirmLength = "";
var confirmSymbol;
var confirmDigit;
var confirmUppercase;
var confirmLowerCase;

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialSymbol = ["!", "%", "&", ",", "*","#", "$", "+", "-", ".", "/", "<", ">", "?","~"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt to select length of password 
 function generatePassword() {
  var confirmLength = (prompt("Choose length of password. Enter length between of at least 8 but no more than 128 characters."));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129 || isNaN (confirmLength)) {
      alert("...Well let's do this again, shall we?");
      var confirmLength = (prompt("Choose length of password. Enter length between of at least 8 but no more than 128 characters."));
      } 

      // Repeat back how many characters the user will have  
      alert("Your password will have " + confirmLength + " characters.");

  // Determine parameters of password 
  var confirmSymbol = confirm("Click OK to confirm if you would like to include special symbols");
  var confirmDigit = confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    // Loop if answer is outside the parameters 
    while(confirmUpperCase === false && confirmLowerCase === false && confirmSymbol === false && confirmDigit === false) {
      alert("You must choose at least one character");
      var confirmSymbol = confirm("Click OK to confirm if you would like to include special symbols");
      var confirmDigit = confirm("Click OK to confirm if you would like to include numeric characters");    
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    }

//Declaring an action to each password parameter
var passFiller = []
if (confirmDigit) {
  passFiller = passFiller.concat(number)
}
if (confirmSymbol) {
  passFiller = passFiller.concat(specialSymbol)
}
if (confirmLowerCase) {
  passFiller = passFiller.concat(upperLetter)
}
if (confirmUpperCase) {
  passFiller = passFiller.concat(lowerLetter)
}

//Empty variable to be filled by for loop 
var randomPassword = ""

//Finally the password 
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passFiller[Math.floor(Math.random() * passFiller.length)];
}
return randomPassword;
}


