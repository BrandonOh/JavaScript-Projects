function callLoop() {
  //loop to go through the bottle of beer song then decrement by 1.
  var a = 10;
  var text = "";
  while (a > 0) {
    text +=
      "<br>" +
      a +
      " bottles of beer on the wall. take one down pass it around." +
      (a - 1) +
      " Bottles of beer on the wall.";
    a--;
  }
  document.getElementById("loop").innerHTML = text;
}

function takeApart() {
  // takes apart input word and sets each letter on different line
  var a = document.getElementById("takeApart").value;
  var textLength = a.length;
  var position = 0;
  var apart = "";
  while (position < textLength) {
    apart += "<br>" + a.charAt(position);
    position++;
  }
  document.getElementById("apart").innerHTML = apart;
}

function forLoop() {
  //displays each text in the array.
  var instruments = [
    "Classical Guitar",
    "Piano",
    "Electric Guitar",
    "Bass",
    "Drums",
    "Synthesizer",
    "Bongos",
  ];
  var content = "";
  var y;
  for (y = 0; y < instruments.length; y++) {
    content += instruments[y] + "<br>";
  }
  document.getElementById("listOfInstruments").innerHTML = content;
}

function arrayFunction() {
  //Grabs a specific element in the array and writes it in the sentence.
  var trees = [];
  trees[0] = "Evergreen";
  trees[1] = "Oak";
  trees[2] = "Willow";
  trees[3] = "Teak";
  trees[4] = "Maple";
  document.getElementById("array").innerHTML =
    trees[3] + " is a vert sturdy kind of wood.";
}

function constantFunction() {
  //creates a constructor for const example and changes and adds new arguments.
  const marble = { color: "blue/green", pattern: "stripped", inside: "wisp" };
  marble.color = "black/yellow";
  marble.size = "large";
  document.getElementById("constant").innerHTML =
    "I have a marble that is " +
    marble.pattern +
    " with the color " +
    marble.color +
    " it is a " +
    marble.size +
    " marble.";
}

function letExample() {
  //example of let variables vs var variables.
  var a = "hello world";
  document.getElementById("letText").innerHTML += a + "<br>";
  {
    let a = "goodbye world";
    document.getElementById("letText").innerHTML += a + "<br>";
  }
  document.getElementById("letText").innerHTML += a + "<br>";
}

function addNumbers() {
  //add number function
  var a = parseInt(document.getElementById("numA").value);
  var b = parseInt(document.getElementById("numB").value);
  document.getElementById("addedUp").innerHTML = add(a, b);
}

function add(a, b) {
  //function used to add the number then return said added number.
  var c = a + b;
  return c;
}

function bookDesc() {
  //function that utilizes the let on a object constructor
  let book = {
    type: "fantasy",
    cover: "hard",
    pageCount: "100-200",
    description: function () {
      return (
        "This is a " +
        book.type +
        " it has a " +
        book.cover +
        " cover and is around " +
        book.pageCount +
        " pages."
      );
    },
  };
  document.getElementById("bookDesc").innerHTML = book.description();
}

function loopBreak() {
  //function will write out numbers from 0 to the input number then stop.
  var breakPoint = document.getElementById("breakPoint").value;
  var i;
  document.getElementById("breakText").innerHTML = "";
  for (i = 0; i <= 30; i++) {
    if (breakPoint < 0 || breakPoint > 30) {
      document.getElementById("breakText").innerHTML =
        "That is an invalid break point number.";
      break;
    } else if (i == breakPoint) {
      document.getElementById("breakText").innerHTML += i + "<br>";
      break;
    } else {
      document.getElementById("breakText").innerHTML += i + "<br>";
    }
  }
}

function loopContinue() {
  //function will find number then write out text "here" as a string then continue.
  var breakPoint = document.getElementById("breakPoint").value;
  var i;
  document.getElementById("breakText").innerHTML = "";
  for (i = 0; i <= 30; i++) {
    if (breakPoint < 0 || breakPoint > 30) {
      document.getElementById("breakText").innerHTML =
        "That is an invalid break point number.";
      break;
    } else if (i == breakPoint) {
      document.getElementById("breakText").innerHTML += "here <br>";
      continue;
    }
    document.getElementById("breakText").innerHTML += i + "<br>";
  }
}
