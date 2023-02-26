// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmNumber;
var confirmCharacter;
var confirmUppercase; 
var confirmLowercase;
var choices;
// created array with all the different characters
var number = ["0","1","2","3","4,","5","6","7","8","9"];

var character = ["!","@","#","$","%","^","&","*","(",")","_","+","=","-","/","~","`","<",">","?",".",";",":"];

var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var alpha2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// created generate password funtion that asked user to select character amount between 8 and 128 characters as per instructions
// as well as else if statements that forces user to pick at least one parameter,   
function generatePassword() {
  
  enter = prompt("Select character amount between 8 and 128 characters");

  if (!enter) {
    alert("MUST CHOOSE AN AMOUNT!!!!!");
  } else if (enter < 8 || enter > 128) {
    enter = prompt("MUST BE GREATER THAN 8 CHARACTERS AND LESS THAN 128 CHARACTERS!!!!");
  
  
  } else {
   confirmNumber = confirm("Do you want your password to have numbers?");
   confirmCharacter = confirm("Do you want your password to have special characters?");
   confirmLowercase = confirm("Do you want your password to have lower case letters?");
   confirmUppercase = confirm("Do you want your password to have upper case letters?"); 
  };

  if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    choices = alert("YOU MUST CHOOSE AT LEAST ONE, DING DONG!!!!!!!!");
  }

  else if (confirmCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
    choices = character.concat(number, alpha, alpha2);
  }
  
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }

  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }

  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  }
  else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  }
  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if(confirmUppercase) {
    choices = alpha2;
  };

  

  var password = [];
// created for loop that randomizes character combinations for user
  for (var i = 0; i < enter; i++){
    var pickChoices = choices[Math.floor(Math.random()* choices.length)];
    password.push(pickChoices);
    console.log(pickChoices)
    
  }

 

  return password;
  

   
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// added .join function to remove commas between characters
  passwordText.value = (password.join(''));
  console.log(password);
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
