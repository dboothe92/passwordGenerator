let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialCharacter = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '{', '|', '}', '~'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Customer input - length of password
let generatePassword = function() {
  //password length
  let passwordLength = parseInt(prompt("How many characters would you lke your password to be?"));

  //verifying valid input for password length
  if (Number.isInteger(passwordLength) && passwordLength >= 8 && passwordLength <= 126) {
    //if valid confirm password options
    numberConfirm = confirm("Would you like a number in your password?");
    specialConfirm = confirm("Would you like a special character in your password?");
    upperConfirm = confirm("Would you like an uppercase letter in your password?");
    lowerConfirm = confirm("Would you like a lowercase letter in your password?");
  } else {
    //response for invalid input
    alert("Please select a numeric value between 8 and 126");
    return generatePassword();
  };

  //If user selects no for all options
  if (!numberConfirm && !specialConfirm && !upperConfirm && !lowerConfirm) {
    alert("Please confirm at least one criteria");
    return generatePassword();
  };

  //new array to hold concatonated arrays for confirmed criteria.
  let combinedArrays = [];

  //if block to show which arrays should be combined (if true concat)
  if (numberConfirm) {
    combinedArrays = combinedArrays.concat(numbers);
  };
  if (specialConfirm) {
    combinedArrays = combinedArrays.concat(specialCharacter);
  };
  if (upperConfirm) {
    combinedArrays = combinedArrays.concat(upperCaseLetters);
  };
  if (lowerConfirm) {
    combinedArrays = combinedArrays.concat(lowerCaseLetters);
  };

  //randomly assemble password and store as array
    let password = [];
    for (i = 0; i < passwordLength; i++) {
      let pickedOptions = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];
      password.push(pickedOptions);
    };
  
  //convert password to string
  password = password.join("");
  console.log(password);
  return password;
};
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
