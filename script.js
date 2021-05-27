// Assignment Code
var generateBtn = document.querySelector("#generate");

//  function suggested from below starter code.
function generatePassword() {
  //This function consists of 3 sections
  //section 1 declare and reset variable
  //section 2 collect information and set variables
  //section 3 build pass word loop

  //START SECTION 1 *****************************************************************  
  // var FunctionVsOjbjectBuild = confirm("inside generate password function \n Choose OK to Create a Password using functions and variables \n Choose Cancel to do use the OLD code");// you will see extra alerts in my code. I like to see functions start and variable print. i know console log can do this as well.

  //SECTION 1
  //Declare variables, Reset Variables, define functions

  // declare special character array, add to obj
  var SplCharSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", '"', "_", "-", "=", "+", ".", ",", "/", "|", "<", ">", "?", "`", "~", ":", ";", "[", "]", "{", "}", "\\"];

  // declare upper case character set array
  var UpperCaseCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // declare upper case character set array
  var LowerCaseCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // declare numbers character set array
  var NumberCharSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //declare charset variable array. then fill it with the max number of characters. 0 = char set not included... IE NOT active
  var CharSet = [];

  //Declare Password as an emplty string
  var Password = "";

  //START Function -This function input is an array of values; returns the number of index values greater than zero. compared against number 0.
  function ArrayValueSum(AddArrayIndexValues) {
    var NumberOfActiveCharSets = 0;
    for (var i = 0; i < (AddArrayIndexValues.length); i++) {
      if (AddArrayIndexValues[i] > 0) {
        NumberOfActiveCharSets = NumberOfActiveCharSets + 1;
      }
    }
    return (NumberOfActiveCharSets);
  }
  //END Function

  //START Function - This function inputs an array of values and an index; returns TRUE if the value is > 0, Else Returns FALSE
  function AIVAF(ArrayIndexValues, index) { //array index value active function
    var AIV = "Default"; // array index value
    if ((index < ArrayIndexValues.length) && (ArrayIndexValues[index] > 0)) {
      return (true);
    } else if ((index < ArrayIndexValues.length) && (ArrayIndexValues[index] == 0)) {
      return (false);
    } else if ((index > ArrayIndexValues.length)) {
      alert("ArrayIndexValueActive Function Sent index value > array length");
    } else {
      return ("Index larger than Array length OR Not an integer Or Exit if Index is null");
    }
  }
  //END Function

  //START Function call for AIVAF This is to test the function above which will be used in the build loop of the password.
  function TestAIVAF(Proceed) {
    if (Proceed) {
      QuitLoop = "NotNull";
      AivafReturnVal = "Defualt";
      while (QuitLoop != null) {
        QuitLoop = prompt("Choose an index of this array to explore \n Character Set: " + CharSet + "\n Character array length: " + CharSet.length +
          "\n remember arrays start at 0 not 1 \n index min: 0 \n index max: " + (CharSet.length - 1));
        AivafReturnVal = AIVAF(CharSet, QuitLoop);
        alert("AIVAF Call with Charset and index: " + QuitLoop + "\n Returned: " + AivafReturnVal);
      }//end while loop for testing array function
    }
    alert("Exiting TestAIVAF");
  }
  //END Function Call for AIVAF

  //START Function Random integer generator, input is min and max values to include, Output is a single integer inclusive range of min max
  function RIF(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //END SECTION 1 ***************************************************************** 

  //START SECTION 2 ***************************************************************** 
  // How long do you want your Password to be? 8 min, 128 max
  var DesiredPwdlength = "DefaultDesiredPwdLength";
  var goodchoice = "NotNull";
  while (((goodchoice != null))) {
    DesiredPwdlength = prompt("How long do you want your password? \n 8 characters min, 128 characters max. \n only integers are allowed!");
    if (DesiredPwdlength === null) {
      alert("You have chosen to NOT build a password. \n Continue to click OK to end.")
      //set escape variable to skip over all other prompts.
      goodchoice = null;
    } else if (((DesiredPwdlength > 7) && (DesiredPwdlength < 129)) || (DesiredPwdlength === "")) {
      //if empty string is chosen the assume default min 8 length
      if (DesiredPwdlength === "") {
        alert("You just clicked OK without adding a value, default will be 8");
        DesiredPwdlength = "8";
      }
      DesiredPwdlength = Number(DesiredPwdlength); //need this to do integer comparison 
      if (Number.isInteger(DesiredPwdlength)) {
        goodchoice = null;
      } else {
        alert("Your value was NOT an integer");
      }
    } //End Else if ((DesiredPwdlength > 7) && (DesiredPwdlength < 129))

  }
  if (DesiredPwdlength != null) {
    // do you want to include special characters?
    var inSplChar = confirm("Include special characters in your password? \n" + SplCharSet);
    if (inSplChar) {
      CharSet.push(SplCharSet.length); //Push Special Character Set array length into Character Set array
    } else {
      CharSet.push("0");
    }

    //do you want to include upper case characters?
    var inUpCasChar = confirm("Include UPPER case characters in your password? \n" + UpperCaseCharSet);
    if (inUpCasChar) {
      CharSet.push(UpperCaseCharSet.length); //Push Special Character Set array length into Character Set array       
    } else {
      CharSet.push("0");
    }

    // do you want to include Lower case characters?
    var inLwrCasChar = confirm("Include lower case characters in your password? \n" + LowerCaseCharSet);
    if (inLwrCasChar) {
      CharSet.push(LowerCaseCharSet.length); //Push Special Character Set array length into Character Set array       
    } else {
      CharSet.push("0");
    }

    // do you want to include numbers?
    var inNumberChar = confirm("Include numbers in your password? \n" + NumberCharSet)
    if (inNumberChar) {
      CharSet.push(NumberCharSet.length); //Push Special Character Set array length into Character Set array       
    } else {
      CharSet.push("0");
    }

    //END SECTION 2 ***************************************************************** 

    //START SECTION 3 ***************************************************************** 
    //given the privous variables build the password string
    if (ArrayValueSum(CharSet) > 0) {
      //alert("Inside if (ArrayValueSum(CharSet) > 0) { ")
      var PRN1 = "DefaultPRN1";
      var PRN2 = "DefaultPRN2";
      var PRC1 = "DefaultPRC1";// might not need this variable
      while ((DesiredPwdlength != Password.length) && ((DesiredPwdlength) >= (Password.length + 1))) {
        PRN1 = RIF(0, (CharSet.length - 1));//Choose next character set to choose from 
        if (AIVAF(CharSet, PRN1)) {//if that character set is active 
          PRN2 = RIF(1, CharSet[PRN1]);//Choose a new random number base on the choose character set size
          if (PRN1 === 0) {
            Password = Password.concat(SplCharSet[PRN2 - 1]);//Add special character choosen the password
          } else if (PRN1 === 1) {
            Password = Password.concat(UpperCaseCharSet[PRN2 - 1]);//Add UpperCase character choosen to password
          } else if (PRN1 === 2) {
            Password = Password.concat(LowerCaseCharSet[PRN2 - 1]);//Add LowerCase character choosen to password
          } else if (PRN1 === 3) {
            Password = Password.concat(NumberCharSet[PRN2 - 1]);//Add number character choosen to password
          } else {
            alert("PRN1 out of range");
          }

        }
        //Shows the progression of the password and the variables as it builds.
      }
      return (String(Password));
    } else {
      alert("You have not included enough character sets to build a password.\n Please try again")
    }


  }
}//END function generatePassword()  ***************************************************************** 

// Write password to the #password input
function writePassword() {
  //alert("inside write password function");
  var password = generatePassword(); // missing function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //alert("End of writePassword Function ");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
