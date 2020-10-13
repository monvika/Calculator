//I have buttons of different types:
// 1. Store the NUMBERS by class
var numbers = document.querySelectorAll(".number");
// 2. OPERATIONS buttons
var operations = document.querySelectorAll(".operation");
// 3. DISPLAY input to show numbers and result
var display = document.querySelector(".display");
// 4. EQUAL button
var equalButton = document.getElementById("result");
// 5. C button
var clear = document.getElementById("clear");

//when I use calculator I provide operations with few numbers - first and the second one:
var firstNumber = 0;
var secondNumber = 0;
//and I select operation 
var selectedOperation;

//by default
var isNextNumber = false;


//instead of using for loop to pick up all buttons I can use forEach:
/**
 * forEach function: 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach
 */
numbers.forEach(function (currentValue, index, array) {//I dont need index and array, only element - currentValue
  currentValue.onclick = function () {
    //console.log("clicked number", parseInt(currentValue.value));
    let numberClicked = parseInt(currentValue.value);
     // currentValue.value is the clicked number (value) - the same as currentValue.value[i] in the loop
    // I use parseInt to convert string to a number 


     // If the first number I click is 0 and after 1,2,3 etc - 0 should be removed from the screen       
      if(display.value == '' && numberClicked == 0){       
        return false;    
       }

    // Each time I click the button with number - show the numbers in display
    display.value += numberClicked;

//save the first number in memory of calculator
    if (isNextNumber == false) {
      firstNumber = display.value; 
    } else {
      secondNumber = display.value;
    }

    console.log(firstNumber)

  }

});

//picking up all buttons with operators
operations.forEach(function (currentValue) {
  currentValue.onclick = function () {
    console.log("operation", currentValue.value)
    selectedOperation = currentValue.value;
    display.value = ''; // I don't show the operation on the screen 
    isNextNumber = true; // and saying after will be the next number (by default it's false)
  }
});

//button =
equalButton.onclick = doOperation;

//after button = is clicked to do selected operation:
function doOperation(){
  switch (selectedOperation) {
    case '+':
      display.value = parseInt(firstNumber) + parseInt(secondNumber)
      break;
    case '-':
      display.value = parseInt(firstNumber) - parseInt(secondNumber)
      break;
    case '*':
      display.value = parseInt(firstNumber) * parseInt(secondNumber)
      break;
    case '/':
      display.value = parseInt(firstNumber) / parseInt(secondNumber)
      break;
    default:
      break;
  }
}
//button C pressed should clean the memory of calculator
clear.onclick = function() {
  display.value = '';
  firstNumber = 0;
  secondNumber = 0;
  selectedOperation = '';
  isNextNumber = false;
}