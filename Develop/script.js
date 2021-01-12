// Assignment Code
var generateBtn = document.querySelector("#generate");
//Prompt for length
var passLength = prompt("Choose length of password. Enter length between of at least 8 but no more than 128 characters.");
//Prompt for character type
var charType = prompt("Enter character type: uppercase, lowercase, symbol, numeric.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Initial Prompt
document.getElementById("generate").addEventListener("click",)




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate a random lower case letter
function getRandomLower() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

//Generate a random upper case letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
 console.log(getRandomUpper());

 //Generate random number
 function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
 console.log(getRandomNumber());

 //Generate random symbol 
 function getRandomSymbol() {
   const symbols = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
   return symbols[Math.floor(Math.random() * symbols.length)];
 }
console.log(getRandomSymbol());