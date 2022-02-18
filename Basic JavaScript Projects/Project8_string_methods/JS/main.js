var a = document.getElementById("text1").innerHTML;
var b = document.getElementById("text2").innerHTML;
var c;

function concatFunction() {
  //function to concatenate the text in text1 and text2.
  c = a.concat(b);
  document.getElementById("text3").innerHTML = c;
}

function sliceFunction() {
  //slice out the word cow in text2.
  c = b.slice(5, 9);
  document.getElementById("text4").innerHTML = c.toUpperCase();
}

function searchWord() {
  //search for location of the word cow in text2.
  c = b.search("cow");
  document.getElementById("text5").innerHTML = c;
}

function numToString() {
  //change the number variable 15 to a string.
  c = 15;
  document.getElementById("text6").innerHTML = c.toString();
}

function preciseNum() {
    c = 3.14159265359;
    document.getElementById("text7").innerHTML = c.toPrecision(3);
}

function fixedAndValued(){
    c = 3.14159265359;
    document.getElementById("text8").innerHTML = c.toFixed() + "<br>" + "primitive is: " + c.valueOf();
}