var a = 15; //This is a global variable.

function sendGuess() { //Guessing game utilizing if and else statement.
    if (document.getElementById("answer").value == 82) {
        document.getElementById("output").innerHTML = "Correct the number was 82!";
    }
    else {
        document.getElementById("output").innerHTML = "Wrong the number wasn't " + document.getElementById("answer").value + ". Please try again.";
    }
}

function timeFunction(){ //Time function to check what time of day it is.
    var time = new Date().getHours();
    var reply;
    if (time <12 == time > 0){
        reply = "It is morning time!";
    }
    else if (time >= 12 == time <18){
        reply = "It is afternoon.";
    }
    else {
        reply = "It is eventing time.";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}

console.log(time); //Intentional error trying to use a local variable