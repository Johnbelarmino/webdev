/*** Validate Function ***/
function validate() {
  var name = document.getElementById("nameText").value;
  var email = document.getElementById("emailText").value;
  var password = document.getElementById("pwText").value;
  var nameAgain = document.getElementById("nameAgainText").value;
  var emailAgain = document.getElementById("emailAgainText").value;
  var passwordAgain = document.getElementById("pwAgainText").value;

  var favoriteColor = document.getElementById("color").value;
  var hobbies = document.getElementById("hobbyText").value;

  if(name == ""){
    alert("Enter a name");
  }
  else if(email == "") {
    alert("Enter an email");
  }
  else if(nameAgain == ""){
    alert("Enter your name again");
  }
  else if(emailAgain == ""){
    alert("Enter your email again");
  }
  else if(favoriteColor == "N/a"){
    alert("Pick a favorite color");
  }
  else if(password == ""){
    alert("Enter a password");
  }
  else if(passwordAgain == ""){
    alert("Enter password again");
  }
  else if(animal[0].checked == false && animal[1].checked == false && animal[2].checked == false){
    alert("You don't have a favorite animal?");
  }
  else if(food[0].checked == false && food[1].checked == false && food[2].checked == false){
    alert("You don't have a favorite meal?");
  }
  else if (hobbies == ""){
    alert("You don't have any hobbies?");
  }
  else if(document.getElementById("overAge").checked == false && document.getElementById("readyCheckbox").checked == false){
    alert("Make sure you checked a checkbox at the bottom!");
  }
}

function checkSimilarity(){
  var name = document.getElementById("nameText").value;
  var email = document.getElementById("emailText").value;
  var password = document.getElementById("pwText").value;
  var nameAgain = document.getElementById("nameAgainText").value;
  var emailAgain = document.getElementById("emailAgainText").value;
  var passwordAgain = document.getElementById("pwAgainText").value;

  if(check(name, nameAgain) == true && check(email, emailAgain) == true && check(password, passwordAgain) == true){
    alert("The names, email and password are the same!");
  }
  else if(check(name, nameAgain) == false){
    alert("The names are not the same!");
  }
  else if(check(email, emailAgain) == false){
    alert("The emails are not the same!");
  }
  else if(check(password, passwordAgain) == false){
    alert("The passwords are not the same!");
  }
}

function check(firstString, secondString){
  similar = false;

  if(firstString == secondString){
    similar = true;
  } else {
    similar = false;
  }

  return similar;
}
