function rideFunction() {
  //function to see if rider is tall enough
  var height, canRide;
  height = document.getElementById("height").value;
  canRide = height < 52 ? "You are too short" : "You are to tall enough";
  document.getElementById("ride").innerHTML = canRide + " to ride.";
}

function voteFunction() {
  //function to see if voter is old enough
  var age, canVote;
  age = document.getElementById("age").value;
  canVote = age >= 18 ? "You are old enough" : "You are not old enough";
  document.getElementById("vote").innerHTML = canVote + " to vote.";
}

function vehicle(make, model, year, color) {
  //function to assign parameters to new constructor
  this.vehicleMake = make;
  this.vehicleModel = model;
  this.vehicleYear = year;
  this.vehicleColor = color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 2020, "Mustard");

function myFunction() {
  //Write out the erik object information
  document.getElementById("keywordsAndConstructor").innerHTML =
    "Erik drives a " +
    Erik.vehicleColor +
    "-colored " +
    Erik.vehicleModel +
    " manufactured in " +
    Erik.vehicleYear;
}

function newKeyword() {
  //function to assign values into new object and then write out.
  var brandon = new vehicle(
    document.getElementById("make").value,
    document.getElementById("model").value,
    document.getElementById("year").value,
    document.getElementById("color").value
  );
  document.getElementById("newAndThis").innerHTML =
    "Brandon drives a " +
    brandon.vehicleColor +
    "-colored " +
    brandon.vehicleModel +
    " manufactured in " +
    brandon.vehicleYear;
}

function nestedFunction() {
  //function within a function that just adds using a function inside it.
  function add(a, b) {
    document.getElementById("nestedFunctionText").innerHTML = a + b;
  }
  add(5, 10);
}
