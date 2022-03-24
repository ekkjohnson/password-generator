// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
return "password";
}

function indexRandomizer(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//1. Create variables to save user input from prompts
  //passwordLength string (read it to be integer)
  //specialCharacter boolean
  //numericCharacters boolean
  //lowercaseCharacters boolean
  //uppercaseCharacters boolean
    //alert, confirm, prompt

//2. Create arrays for each type of character
  //specialCharacters, uppercase, lowercase, numeric

  //4. use a randomizer function to select characters from each array

//3. generatePassword function -- take user input and grab values from arrays and generate a password

//5. create an empty array the represents the final password

//6. join the final character arrays together based on user input

//7. randomize characters from the joined arrays

//8. transfomring the 



var generateBtwn = document.querySelector("#generate")

var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specChar =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var digits = ["0", "1", "2", "3", "4", "5","6","7","8","9"]

const charType=["lowCase", "upperCase", "specChar","digits"];

var userselection= {
 lower: false,
 upper: false,
  spec: false,
  digits: false,
}
var userInput =[]

function writePassword(){
  var password=generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword(){{
  
  var charLength=prompt("Please select 8-128 characters")
  if (charLength <8 || charLength>128){
    alert("Range incorrect, please select 8-128 characters")
    return null;
  }
  
var userchoice=confirm("Lowercase?")
if (userchoice){
  userselection.lower=true
  console.log(userselection.lower)
  //userchoice.concat(userInput)
}
var userchoice=confirm("Uppercase?")
if (userchoice){
  userselection.upper=true
  console.log(userselection.upper)
  //userchoice.concat(userInput)
}
var userchoice=confirm("Special Character?")
if (userchoice){
  userselection.spec=true
  console.log(userselection.spec)
  //userchoice.concat(userInput)
}
var userchoice=confirm("Digit?")
if (userchoice){
  userselection.digits=true
  console.log(userselection.digits)
 // userchoice.concat(userInput)
}
userchoice.concat(userInput)
}
if (userselection.lower===false&&userselection.upper===false&&userselection.spec===false&&userselection.digits===false){
  alert("Please select at least one character type")
  
  var Pass =[]

for (let i=0; i< charLength; i++)
  var selecType= charType[Math.floor(Math.random()*selecType.length)]
  password = password.concat(selecType)
  generatePassword()
}

var pw= Pass.join("")

console.log (pw)
return pw
}


generateBtn.addEventListener("click", writePassword);
