var a = 25,
  b = 7,
  c = 0;

function addition() { // Add a and b variable and assign to c variable
  c = a + b;
  document.getElementById("Math").innerHTML = c;
}

function subtraction() { // Subtracts a and b variable and assign to c variable
  c = a - b;
  document.getElementById("Math").innerHTML = c;
}

function divide() { // Divides a and b variable and assign to c variable
  c = a / b;
  document.getElementById("Math").innerHTML = c;
}

function multiply() { // Multiplies a and b variable and assign to c variable
  c = a * b;
  document.getElementById("Math").innerHTML = c;
}

function modulus() { // Gets remainder of a divided into b variable and assign to c variable
  c = a % b;
  document.getElementById("Math").innerHTML = c;
}

function lotsMath() { // Does a long operation that includes add,subtract,divide and multiply
  c = (a * b + b) / a - b;
  document.getElementById("Math").innerHTML = c;
}

function negate() { // Negates a and assign to c variable
  c = a;
  document.getElementById("Math").innerHTML = -c;
}

function increment() { // Increments the c variable by 1
  c++;
  document.getElementById("Math").innerHTML = c;
}

function decrement() { // Decrements the c variable by 1
  c--;
  document.getElementById("Math").innerHTML = c;
}

function randomNum(){ // Gets a random integer between 1 and 100, rounds that number and then assigns to c variable
    c = Math.round((Math.random() * 100));
    document.getElementById("Math").innerHTML = c;
}