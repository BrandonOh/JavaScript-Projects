function candyFunction() {
  //function to look for input candy and output proper text.
  var candyText;
  var candyChoice = document.getElementById("candyInput").value;

  switch (candyChoice.toLowerCase()) {
    case "gummy bears":
      candyText = "Gummy Bears are a great choice I like their shape.";
      break;
    case "gummy worms":
      candyText = "Gummy Worms are great, better than the real ones.";
      break;
    case "sour straws":
      candyText = "Sour Straws are tasty I like how sour they are.";
      break;
    case "skittles":
      candyText = "Skittles are a classic they come in great flavors.";
      break;
    case "air heads":
      candyText = "Air Heads are amazing they have a large variety of flavors.";
      break;
    default:
      candyText = "Please write a valid candy from the list.";
  }
  document.getElementById("candyText").innerHTML = candyText;
}

function changeText() {//changes only the 2nd element in the class textTest.
    var texts = document.getElementsByClassName("textTest");
    texts[1].innerHTML = "See I have changed."
}

var c=document.getElementById("box");
var ctx=c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"green");
ctx.fillStyle = grd;
ctx.fillRect(0,0,200,200);
ctx.beginPath()
ctx.arc(100, 100, 80,0, 2 * Math.PI);
ctx.stroke();


