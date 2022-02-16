var a = 25,
  b = 7,
  c = 0;

function addition() {
  c = a + b;
  document.getElementById("Math").innerHTML = c;
}

function subtraction() {
  c = a - b;
  document.getElementById("Math").innerHTML = c;
}

function divide() {
  c = a / b;
  document.getElementById("Math").innerHTML = c;
}

function multiply() {
  c = a * b;
  document.getElementById("Math").innerHTML = c;
}

function modulus() {
  c = a % b;
  document.getElementById("Math").innerHTML = c;
}

function lotsMath() {
  c = (a * b + b) / a - b;
  document.getElementById("Math").innerHTML = c;
}

function negate() {
  c = a;
  document.getElementById("Math").innerHTML = -c;
}

function increment() {
  c++;
  document.getElementById("Math").innerHTML = c;
}

function decrement() {
  c--;
  document.getElementById("Math").innerHTML = c;
}

function randomNum(){
    c = Math.round((Math.random() * 100));
    document.getElementById("Math").innerHTML = c;
}