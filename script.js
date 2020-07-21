// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols = ["!", "@", "$","#","%","^","&","*","(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// Write password to the #password input
function generatePassword() {
  // variable for length of password
  var passLength = prompt("How many characters do you want your password to have?");
 
  console.log(passLength);
  
  if (passLength<8) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (passLength > 128) {
    alert("Password must be at less than 128 characters");
    return;
  }

  var hasSymbols = confirm("Click ok if you want symbols");

  console.log(hasSymbols);

  var hasUpper = confirm("Click ok if you want uppercase letters");
  var hasLower = confirm("Click ok if you want lowercase letters");
  var hasNumber = confirm("Click ok if you want numbers")

  var passOptions = {
    length : passLength,
    includeSymbols : hasSymbols,
    includeUppercase : hasUpper,
    includeLower : hasLower,
    includeNumber : hasNumber,
  }

  console.log(passOptions);

  const randomFunc = {
    upper : getRandomUppercase,
    lower : getRandomLowercase,
    number : getRandomNumbers,
    symbol : getRandomSymbols,
  }
  
  function getRandomLowercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
  }
  
  function getRandomUppercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
  }
  
  function getRandomSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  function getRandomNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  
  console.log(randomFunc);
  
for (i = 0; i < passLength; i++) {
  randomFunc;
}


}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




