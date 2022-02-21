function submitForm() {
  var x =
    document.forms["myForm"]["fName"].value;
    if (x == "") {
      alert("Some of the form has not been filled out.");
    } else {
      alert("Thank you for submitting the form.");
    }
}
