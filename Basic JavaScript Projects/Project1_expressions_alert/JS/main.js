var A = '"The quick brown fox jumps over the lazy dog"', //create variable A and assign string text
  B = " is an English-language pangram";                //create variable B and assign string text
document.write(A); //Write out variable A on screen

document.write("<br>"); //break to next line

window.alert(B); //Have a pop up of the variable B

document.write(A + B); //concatenate variable A and B

document.write("<br>"); //break to next line

document.write(A.fontcolor("green")); //write variable A in green text

var C = B + A; //expression to concatenate two variables

document.write("<br>"); //break to next line

document.write(C);

function changeColor(){
    document.getElementById("text").innerHTML = "I am Blue".fontcolor("blue");    
}