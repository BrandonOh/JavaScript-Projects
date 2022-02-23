//Creates an object to keep track of values.
const Calculator = {
  //This is displays 0 on the screen
  displayValue: "0",
  //This will hold the first operand for any expressions, we set it to null for now
  firstOperand: null,
  //This checks whether or not the second operand has been input
  waitSecondOperand: false,
  //This will hold the operator, we set it to null for now
  operator: null,
};

//This modifies values each time a button is clicked
function inputDigit(digit) {
  const { displayValue, waitSecondOperand } = Calculator;
  //We are checking to see if waitSecondOperand is true and set
  //displayValue to the key that was clicked.
  if (waitSecondOperand === true) {
    Calculator.displayValue = digit;
    Calculator.waitSecondOperand = false;
  } else {
    //This overwrites displayValue if the current value is 0
    //otherwise it adds onto it
    Calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
}
//This section handles decimal points
function inputDecimal(dot) {
  //This ensures that accidental clicking of the decimal point
  //doesn't cause bugs in your operation
  if (Calculator.waitSecondOperand === true) {
    return;
  }
  if (!Calculator.displayValue.includes(dot)) {
    //We are saying that if the displayValue does not contain a decimal point
    //We want to add a decimal point
    Calculator.displayValue += dot;
  }
}

//This section handles operators
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = Calculator;
  //When an operator key is pressed, we convert the current number
  //display on the screen to a number and then store the result in
  //Calculator.firstOperand if it doesn't already exist
  const valueOfInput = parseFloat(displayValue);
  //Checks if an operator already exists and if waitSecondOperand is true,
  //then updates the operator and exits from the function
  if (operator && Calculator.waitSecondOperand) {
    Calculator.operator = nextOperator;
    return;
  }
  if (firstOperand == null) {
    Calculator.firstOperand = valueOfInput;
  } else if (operator) {
    //Checks if an operator already exists.
    const valueNow = firstOperand || 0;
    //If operators exists, property lookup is performed for the operator
    //in the performCalculation object and the function that matches the
    //operator is executed
    let result = performCalculation[operator](valueNow, valueOfInput);
    //Here we add a fixed amount of numbers after the decimal
    result = Number(result).toFixed(9);
    //This will remove any trailing 0's
    result = (result * 1).toString();
    Calculator.displayValue = parseFloat(result);
    Calculator.firstOperand = parseFloat(result);
  }
  Calculator.waitSecondOperand = true;
  Calculator.operator = nextOperator;
}

const performCalculation = {
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
  "=": (firstOperand, secondOperand) => secondOperand
};

function calculatorReset() {
  Calculator.displayValue = "0";
  Calculator.firstOperand = null;
  Calculator.waitSecondOperand = false;
  Calculator.operator = null;
}

//This function updates the screen with the contents of displayValue
function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = Calculator.displayValue;
}

updateDisplay();
//This section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  //the target variable is an object that represents the element
  //that was clicked
  const { target } = event;
  //if the element that was clicked on is not a button, exit the function
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  //ensures that AC clears the numbers from the Calculator
  if (target.classList.contains("all-clear")) {
    calculatorReset();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
