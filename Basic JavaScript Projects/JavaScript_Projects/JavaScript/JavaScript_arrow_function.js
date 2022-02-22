function displayTextFunction() {
  document.getElementById("functionText").innerHTML =
    "Hello World! This was with a normal function!";
}

displayTextArrow = () =>
  (document.getElementById("arrowText").innerHTML =
    "Hello World! This was with an arrow function!");
