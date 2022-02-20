var slideIndex = 1; //sets index to first slide 1
showSlides(slideIndex); //do function showSlides with 1 value as parameter

function plusSlides(n) {
  //used to increment or decrement the slide number by 1.
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  //used to reset to 1 if index goes above what is the last index.
  showSlides((slideIndex = n));
}

function showSlides(n) {
  //function for displaying slides.
  var i; //variable for for loop
  var slides = document.getElementsByClassName("mySlides"); //sets all the classes with mySlides name to variable slides
  var dots = document.getElementsByClassName("dot"); //sets all classes with dot name to variable dot
  if (n > slides.length) {
    //if statement to make it so if n parameter is higher than last index reset n to 1.
    slideIndex = 1;
  }
  if (n < 1) {
    //if statement to make it that if n parameter is less than 1 set to last index/.
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) { //set all slides to display as none.
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //set the dots as not active.
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block"; //display the current index
  dots[slideIndex - 1].className += " active"; //set the dot as active based on what index we are on.
}

function countdown() {
  var seconds = document.getElementById("seconds").value;//set value of input to variable seconds

  function tick() {//function to count down from variable seconds to 0 and display it in paragraph element.
    seconds = seconds -1;
    document.getElementById("timer").innerHTML = seconds;
    var time = setTimeout(tick, 1000);
    if( seconds == -1){
      alert("Time's up");
      clearTimeout(time);
      document.getElementById("timer").innerHTML = "";
    }
  }
  tick()
}