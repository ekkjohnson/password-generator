// Assignment Code
var generateBtn = document.querySelector("#generate");


//function generatePassword(){
//return "password";
//}

function indexRandomizer(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



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



var generateBtn = document.querySelector("#generate")

var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specChar =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var digits = ["0", "1", "2", "3", "4", "5","6","7","8","9"]

var container=[]
var newPassword= "";

const charType=["lowCase", "upperCase", "specChar","digits"];

var userSelection= {
 lower: undefined,
 upper: undefined,
  spec: undefined,
  digits: undefined,
}
generateBtn.addEventListener("click", writePassword);
  function generatePassword() {
    //prompting user engagement to select characters
    var charInput= prompt("Please select between 8 and 128 characters.")
      if (charInput < 8 || charInput > 128) {
        alert("Selection was incorrect. Please select between 8 and 128 characters.")
          generatePassword()
      }
     
      //going through boolean values
    var userChoice= confirm("Would you like lowercase characters?")
      if (userChoice) {
        userSelection.lower= true
        container.push(lowCase)
      } else {
        userSelection.lower=false
      }
    var userChoice= confirm("Would you like uppercase characters?")
      if (userChoice) {
        userSelection.upper= true
        container.push(upperCase)
      }  else {
        userSelection.upper=false
      }
    var userChoice= confirm("Would you like numeric characters?")
      if (userChoice) {
        userSelection.digits= true
        container.push(digits)
      } else {
        userSelection.digits=false
      }
    var userChoice= confirm("Would you like special characters?")
      if (userChoice) {
        userSelection.spec= true
        container.push(specChar)
      } else {
        userSelection.spec=false
      }
 

if (userSelection.lower===false&&userSelection.upper===false&&userSelection.spec===false&&userSelection.digits===false){
  alert("Please select at least one character type")
  console.log(container)
}

numberGenerator(charInput)
var generatePassword= newPassword
newPassword=""
return generatePassword
  }
function numberGenerator (x){
for (let i=0; i< x; i++){
  var selecType= container[Math.floor(Math.random()*container.length)]
  newPassword = newPassword.concat(selecType[Math.floor(Math.random() * selecType.length) ])
}
return newPassword
}
  // container.push(selecType)
console.log(container)


  var pw= container.join("")
  console.log (pw)


// return pw

// var pw= Pass.join("")




// function writePassword(){
//   var password=generatePassword();
//   var passwordText = document.querySelector("#password");
  
//   passwordText.value = password;
// }



