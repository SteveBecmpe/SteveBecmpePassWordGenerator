// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to randomly pick from special character array

// function to randomly pick from lower case characters

// function to randomly pick from upper case characters

// create 
function generatePassword() {
  alert("inside generate password function");

  // How long do you want your Password to be? 8 min, 128 max
  var passwordlength = prompt("How long do you want your password? \n 8 characters min, 128 characters max.");
 // Check if return is a number, if not prompt again.
 // Check if return is less than 8 or greater than 128, prompt if not in range
 
alert(passwordlength);


  // declare special character array
var SplCharSet = ["!","@","#","$","%","^","&","*","(",")","'",'"',"_","-","=","+",".",",","/","|","<",">","?","`","~"];
alert("These are all the special characters that will be included in the password \n" + SplCharSet);

// do you want to include special characters?
  var inSplChar = confirm("Include special characters in your password?");
  if(inSplChar) {
    alert(" I do want to include special characters in my password");
    alert("These are all the special characters that will be included in the password \n" + SplCharSet);
  }else{
    alert(" I do NOT want to include special characters in my password");
  }
  
  // declare upper case character set array

  var UpperCaseCharSet = ["A","B","C","D"]

  // do you want to include upper case characters?
  var inUpCasChar = confirm("Include UPPER case characters in your password?");
  if(inUpCasChar) {
    alert("I do want to include UPPER case characters in my password");
  }else{
    alert("I do NOT want to include UPPER case characters in my password");
  }
 

  // do you want to include numbers?
}






// Write password to the #password input
function writePassword() {
  alert("inside write password function");
  var password = generatePassword(); // missing function
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  alert("End of writePassword Function");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
