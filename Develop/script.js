let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
let specialCharacter = '!"#$%&()*+,-./:;<=>?@[^_`{|}~';
let numbers = '1234567890';

// Customer input - length of password
let passwordGenerate = function() {
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
    return passwordGenerate();
  };

  //If user selects no for all options
  if (!numberConfirm && !specialConfirm && !upperConfirm && !lowerConfirm) {
    alert("Please confirm at least one criteria");
    return passwordGenerate();
  //all 4 critera are confirmed
  } else if (numberConfirm && specialConfirm && upperConfirm && lowerConfirm) {
    options = upperCaseLetters.concat(lowerCaseLetters, specialCharacter, numbers);

    //3 criteria are confirmed
  } else if (!numberConfirm && specialConfirm && upperConfirm && lowerConfirm) {
    options = upperCaseLetters.concat(lowerCaseLetters, specialCharacter);
  } else if (numberConfirm && !specialConfirm && upperConfirm && lowerConfirm) {
    options = upperCaseLetters.concat(lowerCaseLetters, numbers);
  } else if (numberConfirm && specialConfirm && !upperConfirm && lowerConfirm) {
    options = lowerCaseLetters.concat(specialCharacter, numbers);
  } else if (numberConfirm && specialConfirm && upperConfirm && !lowerConfirm) {
    options = upperCaseLetters.concat(specialCharacter, numbers);

    //2 criteria are confirmed
  } else if (!numberConfirm && !specialConfirm && upperConfirm && lowerConfirm) {
    options = upperCaseLetters.concat(lowerCaseLetters);
  } else if (!numberConfirm && specialConfirm && !upperConfirm && lowerConfirm) {
    options = lowerCaseLetters.concat(specialCharacter);
  } else if ( !numberConfirm && specialConfirm && upperConfirm && !lowerConfirm) {
    options = upperCaseLetters.concat(specialCharacter);
  } else if (numberConfirm && !specialConfirm && !upperConfirm && lowerConfirm) {
    options = lowerCaseLetters.concat(numbers);
  } else if (numberConfirm && !specialConfirm && upperConfirm && !lowerConfirm) {
    options = upperCaseLetters.concat(numbers);
  } else if (numberConfirm && specialConfirm && !upperConfirm && !lowerConfirm) {
    options = specialCharacter.concat(numbers);

    //1 criteria is confirmed
  } else if (numberConfirm && !specialConfirm && !upperConfirm && !lowerConfirm) {
    options = numbers;
  } else if (!numberConfirm && specialConfirm && !upperConfirm && !lowerConfirm) {
    options = specialCharacter;
  } else if (!numberConfirm && !specialConfirm && upperConfirm && !lowerConfirm) {
    options = upperCaseLetters;
  } else if (!numberConfirm && !specialConfirm && !upperConfirm && lowerConfirm) {
    options = lowerCaseLetters;
  };

  //randomly assemble password and store as array
  let password = [];
  for (i = 0; i < passwordLength; i++) {
     let pickedOptions = options[Math.floor(Math.random() * options.length)];
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
  let password = passwordGenerate();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
