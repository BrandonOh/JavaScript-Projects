function typeOf() { //Returns data type of variable a
  var a = "15";
  document.write(typeof a);
}
function checkString() { //Check to see if sentence is not a number
  document.getElementById("testString").innerHTML = isNaN(
    "is this sentence an integer"
  );
}
function checkNum() { //Check to see if 7 is not a number
  document.getElementById("testNum").innerHTML = isNaN(7);
}
function infinityNum() { //Example of high number showing up as text infinity
  document.getElementById("infinity").innerHTML = 5e1000 + " " + -5e1000;
}
function compareNum() { //Compares two integers and returns true, adds in console and compares in log returning false
  document.getElementById("compareNum").innerHTML = 7 < 16;
  console.log(7 + 16);
  console.log(7 > 16);
}
function isEqual() { //Compare to see if integers are equal.
    document.getElementById("isEqualTrue").innerHTML = 3 == 3;
    document.getElementById("isEqualFalse").innerHTML = 33 == 3;
}
function tripleCompare() { //Compares to see if data types and/or value are equal.
    document.getElementById("tripleEqual1").innerHTML = 3 === 3;
    document.getElementById("tripleEqual2").innerHTML = "three" === 3;
    document.getElementById("tripleEqual3").innerHTML = "3" === 3;
    document.getElementById("tripleEqual4").innerHTML = "three" === "four";
}
function logicCheck(){ //Logic check with "and" and "or"
    document.getElementById("logicText1").innerHTML = 10 > 5 && 25 > 20;
    document.getElementById("logicText2").innerHTML = 5 > 10 && 25 > 20;
    document.getElementById("logicText3").innerHTML = 10 > 5 || 20 > 25;
    document.getElementById("logicText4").innerHTML = 5 > 10 || 20 > 25;
}
function notLogicCheck(){ //Logic check utilizing "not"
    document.getElementById("notLogicText").innerHTML = !(100 > 50) + ": wait thats not correct" + "</br>" + !(100 < 50) + ": thats correct"    
}