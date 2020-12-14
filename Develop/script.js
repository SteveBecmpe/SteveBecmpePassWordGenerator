// Assignment Code
var generateBtn = document.querySelector("#generate");

//  function suggested from below starter code.
function generatePassword() {
  // this function consists of 3 sections
  //section 1 declare and reset variable
  //section 2 collect information and set variables
  //section 3 build pass word loop

  //START SECTION 1 *****************************************************************  
  var FunctionVsOjbjectBuild = confirm("inside generate password function \n Choose OK to Create a Password using functions and variables \n Choose Cancel to do use the OLD code");// you will see extra alerts in my code. I like to see functions start and variable print. i know console log can do this as well.
  if (FunctionVsOjbjectBuild) {
    alert("Building in New section With Functions");
    //SECTION 1**************************************************
    //Declare variables, Reset Variables, define functions

    // declare special character array, add to obj
    var SplCharSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", '"', "_", "-", "=", "+", ".", ",", "/", "|", "<", ">", "?", "`", "~"];
    //alert("These are all the special characters that will be included in the password \n" + SplCharSet);

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
        //console.log("ArrayIndexValueActive Function Sent index value > array length");
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


    //END SECTION 1**********************************************

    //START SECTION 2********************************************
    // How long do you want your Password to be? 8 min, 128 max
    var DesiredPwdlength = "DefaultDesiredPwdLength";
    var goodchoice = "NotNull";
    //alert("Variable declarations \n DesiredPwdLength= " + DesiredPwdlength + "\n goodchoice= " + goodchoice);
    while (((goodchoice != null))) {
      //  alert("inside while");
      DesiredPwdlength = prompt("How long do you want your password? \n 8 characters min, 128 characters max. \n only integers are allowed!");
      //  alert("You choose " + DesiredPwdlength);
      if (DesiredPwdlength === null) {
        //  alert("inside if (DesiredPwdlength === null)");
        alert("You have chosen to NOT build a password. \n Continue to click OK to end.")
        goodchoice = null;
      } else if ((DesiredPwdlength > 7) && (DesiredPwdlength < 129)) {
        //  alert("inside comparison else if ((DesiredPwdlength > 7) && (DesiredPwdlength < 129)) ");
        DesiredPwdlength = Number(DesiredPwdlength); //need this to do integer comparison 
        if (Number.isInteger(DesiredPwdlength)) {
          //  alert("inside if (Number.isInteger(DesiredPwdlength)) meaning \n DesiredPwdlength= " + Number.isInteger(DesiredPwdlength));
          goodchoice = null;
          //  alert("goodchoice var = " + goodchoice);
        } else {
          alert("Your value was NOT an integer");
        }
      } //End Else if ((DesiredPwdlength > 7) && (DesiredPwdlength < 129))

    }
    alert("Exited the while loop " + "\n Desired Password Lenght is " + DesiredPwdlength + "\n Variable type is " + typeof (DesiredPwdlength) + "\n Variable math.isinteger is " + Number.isInteger(DesiredPwdlength));

    // do you want to include special characters?
    var inSplChar = confirm("Include special characters in your password? \n" + SplCharSet);
    if (inSplChar) {
      CharSet.push(SplCharSet.length); //Push Special Character Set array length into Character Set array
      //alert(" I do want to include special characters in my password \n" + SplCharSet + "\n" + CharSet);
      //  incrementCharSetQty();// this needs to be converted to the object and array max number of characters 
    } else {
      CharSet.push("0");
      //alert(" I do NOT want to include special characters in my password \n" + CharSet);
    }

    //do you want to include upper case characters?
    var inUpCasChar = confirm("Include UPPER case characters in your password? \n" + UpperCaseCharSet);
    if (inUpCasChar) {
      //alert("I do want to include UPPER case characters in my password");
      CharSet.push(UpperCaseCharSet.length); //Push Special Character Set array length into Character Set array       
    } else {
      CharSet.push("0");
      // alert("I do NOT want to include UPPER case characters in my password");
    }

    // do you want to include Lower case characters?
    var inLwrCasChar = confirm("Include UPPER case characters in your password? \n" + LowerCaseCharSet);
    if (inLwrCasChar) {
      // alert("I do want to include Lower case characters in my password \n" + LowerCaseCharSet);
      CharSet.push(LowerCaseCharSet.length); //Push Special Character Set array length into Character Set array       
    } else {
      CharSet.push("0");
      // alert("I do NOT want to include UPPER case characters in my password");
    }


    // do you want to include numbers?
    var inNumberChar = confirm("Include numbers in your password? \n" + NumberCharSet)
    if (inNumberChar) {
      //alert("I do want to include Numbers in my password");
      CharSet.push(NumberCharSet.length); //Push Special Character Set array length into Character Set array       
    } else {
      CharSet.push("0");
      //alert("I do NOT want to include Numbers in my password");
    }

    //FUNCTION CALL ArrayValueSum 
    alert("You have chosen to have " + ArrayValueSum(CharSet) + " Chacater Sets Active for Random Password Character Generation");

    //Function CALL TestAIVAF
    // if (confirm("Press OK to test AIVAF")) {
    //   TestAIVAF(true);
    // }

    //  //display the number of character sets to include  
    // alert("Variable Declarations \n Character Set Array: " + CharSet + " \n Character Set array Lenght: " + CharSet.length + " \n" + " \n Special Character Set Array: \n" + SplCharSet +
    //   " \n" + " \n Uppder Case Character Set : \n" + UpperCaseCharSet + " \n" + " \n Lower Case Character Set: \n" + LowerCaseCharSet + " \n" + " \n Number Character set: \n" + NumberCharSet +
    //   " \n" + " \n Desired Password Lenght is " + DesiredPwdlength + " \n Variable type is " + typeof (DesiredPwdlength) + " \n Variable math.isinteger is " + Number.isInteger(DesiredPwdlength));

    //END SECTION 2

    //START SECTION 3
    alert("Start Section 3");
    //given the privous variables build the password string

    alert("if statement will start if this value is > 0. Value = " + ArrayValueSum(CharSet));
    if (ArrayValueSum(CharSet) > 0) {
      //alert("Inside if (ArrayValueSum(CharSet) > 0) { ")
      var PRN1 = "DefaultPRN1";
      var PRN2 = "DefaultPRN2";
      var PRC1 = "DefaultPRC1";// might not need this variable
      //alert("DesiredPwdlength = " + DesiredPwdlength + " \n Password Lenght = " + Password.length);
      while ((DesiredPwdlength != Password.length) && ((DesiredPwdlength) >= (Password.length + 1))) {
        PRN1 = RIF(0, (CharSet.length - 1));//Choose next character set to choose from 
        if (AIVAF(CharSet, PRN1)) {//if that character set is active 
          //alert("inside  if(AIVAF(CharSet,PRN1)){//if that character set is active ");
          PRN2 = RIF(1, CharSet[PRN1]);//Choose a new random number base on the choose character set size
          if (PRN1 === 0) {
            // alert("inside  if(PRN1===0){");
            Password = Password.concat(SplCharSet[PRN2-1]);//Add special character choosen the password
          } else if (PRN1 === 1) {
            // alert("inside 1st else if(PRN1===1){ ");
            Password = Password.concat(UpperCaseCharSet[PRN2-1]);//Add UpperCase character choosen to password
          } else if (PRN1 === 2) {
            // alert("inside 2nd else if(PRN1===2){ ");
            Password = Password.concat(LowerCaseCharSet[PRN2-1]);//Add LowerCase character choosen to password
          } else if (PRN1 === 3) {
            // alert("inside 3rd else if(PRN1===3){");
            Password = Password.concat(NumberCharSet[PRN2-1]);//Add number character choosen to password
          } else {
            alert("PRN1 out of range");
          }

        }
        //Shows the progression of the password and the variables as it builds.
        //alert("PRN1: " + PRN1 + " \nPassword length: " + Password.length + " \nDesired Length: "+DesiredPwdlength+ " \nPassword = " + Password);
      }
      return (String(Password));
    } else {
      alert("You have not included enough character sets to build a password.\n Please try again")
    }





    //alert("End of New Section \n here are all the variable current values \n CharSet"+  )
    //*****************************************************************************************************************************************************************************/
  } else { //Start Else Object,,, under construction





    //   //SECTION 1  
    //   //Start 1.1 learn how to create an empty array, prompt user for data of the array, print array and array length. will need this for character set variable array developement and search
    //   // the CharSet array will contain the max number of items in each character set. the array length is predetermined by the programmer. The array variables default will be 0.
    //   // during the "collect information and set variables" section this array values will change from 0 to the max character set during prompts. 
    //   // this allows the calculation code to expand and contract by how many character set made available by the programmer. 
    //   // code allowed me to understand how to create an empty array, prompt the user for values for the array and add them, which is how the array will be built during Section 1.
    //   var QuitLoop = 1;
    //   var CharSet = [];
    //   while (QuitLoop != null) {
    //     QuitLoop = prompt("Set CharSet index value");
    //     if (QuitLoop != null) {
    //       CharSet.push(QuitLoop);
    //       alert(" var CharSet created \n CharSet.leght = " + CharSet.length + "\n CharSet = " + CharSet);
    //     }
    //   }
    //   alert("Exit Whileloop \n var CharSet created \n CharSet.leght = " + CharSet.length + "\n CharSet = " + CharSet);
    //   //END 1.1

    //   //Start 1.2  this is for the object build, declarations and default values.

    //   var passwordOBJ = {//this object variable needs to hold all the function and variables below... below is seperate variable attempt/start of this project
    //     // var CharSet = [0]; this is an array variable that starts with 1 element value of 0. each element(index) represents the the number of characters in that set. is get

    //   }

    //   //END 1.2


    //   //Section 2 collect information and set variables

    //   //START 2.1 psuedo code
    //   //  prompt user for DesiredPwdLength (create this as a variable, need it for while loop later), if user choose ok on empty default length is 8 char. if cancel is choosen no pwd created 
    //   //    this is very different from below... below it continues to prompt you 
    //   //    this requires verification that it is a number between 8 and 128. 
    //   //  prompt user if they want to use special characters and show them the character set, noting space is left out. if yes change CharSet[0]=SplCharSet.length;
    //   //  prompt user if they want to use Upper Case English Characters, show them the character set to be consistent. If yes change CharSet[1]=UpperCaseCharSet.length;
    //   //  prompt user if they want to use lower Case English Characters, show them the character set to be consistent. If yes change CharSet[2]=LowerCaseCharSet.length;
    //   //  Prompt user if they want to use numbers, show them the character set. If yes change CharSet[3]=NumberCharSet.lenght;
    //   //END 2.1


    //   //Section 3 build password loop

    //   //Start 3.1
    //   //  Start of while loop
    //   //  while ( DesiredPwdLength != Password.length) using random numbers to pick next character set to choose from could result in choosing a 0 value (non active) character set.
    //   //    this randomly chooses the next character set to select a character from and stores it in a "pending random number 1 " variable
    //   //      PRN1 (pending random number 1)  = RandomNumber(Function)(might name it RNF), pass 2 variables (min, max), min number will always be 0, in this case.. Max = CharSet.lenght, this allows the it to expand and contract depending on the total number of character sets programmed.
    //   //    If the value at the index of the CharSet array is active (not equal to zero) then store a second random number in PRN2 (pending random number 2) given the min of 0 and the max length of that character set  
    //   //    if( CharSet[PRN1]!=0 )
    //   //      if ture
    //   //        PRN2 (pending random number 2) = RandomNumber ( min=0, max = CharSet[PRN1]) this line gets the random position of the character in the character set
    //   //        given PRN2 has been found, set the PRC (Pending Random Character) equal to the value of the character set at index PRN2
    //   //        Function call update password.. this appends/add the PRC to the password. password should be an empty string.  
    //   //      Else 
    //   //        do nothing. do not update anything because the random character set that was choosen had a value of zero making it NOT Active.
    //   //     End if/else
    //   //  End loop
    //   //END 3.1


    //   // Below this line is OLD single variable NON object code.

    //   // declare special character array, add to obj
    //   var SplCharSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", '"', "_", "-", "=", "+", ".", ",", "/", "|", "<", ">", "?", "`", "~"];
    //   //alert("These are all the special characters that will be included in the password \n" + SplCharSet);

    //   // declare upper case character set array
    //   var UpperCaseCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //   // declare upper case character set array
    //   var LowerCaseCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //   // declare numbers character set array
    //   var NumberCharSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    //   //declare variable character set qty, to keep track of how many sets to include. might be able to change this to an array and use lenght.. later
    //   function incrementCharSetQty() {
    //     CharSetQty = CharSetQty + 1;
    //   }








    //   // How long do you want your Password to be? 8 min, 128 max
    //   var DesiredPwdlength = "DefaultDesiredPwdLength";
    //   var goodchoice = "NotNull";
    //   alert("Variable declarations \n DesiredPwdLength= " + DesiredPwdlength + "\n goodchoice= " + goodchoice);
    //   while (((goodchoice != null))) {
    //     alert("inside while");
    //     DesiredPwdlength = prompt("How long do you want your password? \n 8 characters min, 128 characters max. \n only integers are allowed!");
    //     alert("You choose " + DesiredPwdlength);
    //     if (DesiredPwdlength === null) {
    //       alert("inside if (DesiredPwdlength === null)")
    //       goodchoice = null;
    //     } else if ((DesiredPwdlength > 7) && (DesiredPwdlength < 129)) {
    //       alert("inside comparison else if ((DesiredPwdlength > 7) && (DesiredPwdlength < 129)) ");
    //       DesiredPwdlength = Number(DesiredPwdlength); //need this to do integer comparison 
    //       if (Number.isInteger(DesiredPwdlength)) {
    //         alert("inside if (Number.isInteger(DesiredPwdlength)) meaning \n DesiredPwdlength= " + Number.isInteger(DesiredPwdlength));
    //         goodchoice = null;
    //         alert("goodchoice var = " + goodchoice);
    //       } else {
    //         alert("Your value was NOT an integer")
    //       }
    //     } //End Else if ((DesiredPwdlength > 7) && (DesiredPwdlength < 129))
    //   }//END While



    //   // do you want to include special characters?
    //   var inSplChar = confirm("Include special characters in your password? \n" + SplCharSet);
    //   if (inSplChar) {
    //     alert(" I do want to include special characters in my password");
    //     //  incrementCharSetQty();// this needs to be converted to the object and array max number of characters 
    //   } else {
    //     alert(" I do NOT want to include special characters in my password");
    //   }



    //   // do you want to include upper case characters?
    //   var inUpCasChar = confirm("Include UPPER case characters in your password? \n" + UpperCaseCharSet);
    //   if (inUpCasChar) {
    //     alert("I do want to include UPPER case characters in my password");
    //     //  incrementCharSetQty();// this needs to be converted to the object and array max number of characters 
    //   } else {
    //     alert("I do NOT want to include UPPER case characters in my password");
    //   }

    //   // do you want to include Lower case characters?
    //   var inLwrCasChar = confirm("Include UPPER case characters in your password? \n" + LowerCaseCharSet);
    //   if (inLwrCasChar) {
    //     alert("I do want to include Lower case characters in my password");
    //     //  incrementCharSetQty();// this needs to be converted to the object and array max number of characters 
    //   } else {
    //     alert("I do NOT want to include UPPER case characters in my password");
    //   }


    //   // do you want to include numbers?
    //   var inNumberChar = confirm("Include numbers in your password? \n" + NumberCharSet)
    //   if (inNumberChar) {
    //     alert("I do want to include Numbers in my password");
    //     //  incrementCharSetQty();
    //   } else {
    //     alert("I do NOT want to include Numbers in my password");
    //   }

    //   //display the number of character sets to include  
    //   alert(" Number of character sets to include: " + CharSetQty);

    //   // how to distribute the randomness...?
    //   // divide the password length evenly across the CharSets choosen.
    //   // min 8 char across, SplCharSet, UpperCharSet, NumberCharSet, LowerCharSet,  means 2 random from each
    //   // precedence is given in this order SplCharSet, UpperCharSet, NumberCharSet, LowerCharSet
    //   // number of CharSets choosen needs to be calculated.
  }//END Else Object,,, under construction

}//END function generatePassword()

// Write password to the #password input
function writePassword() {
  alert("inside write password function");
  var password = generatePassword(); // missing function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("End of writePassword Function ");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
