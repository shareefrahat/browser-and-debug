const id = (id) => document.getElementById(id);

id("invalid-text").style.display = "none";
id("valid-text").style.display = "none";

const emailField = id("email-field");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

id("submit-btn").addEventListener("click", function () {
  if (emailField.value.match(emailRegex)) {
    id("invalid-text").style.display = "none";
    id("valid-text").style.display = "block";
  } else {
    id("invalid-text").style.display = "block";
    id("valid-text").style.display = "none";
  }
});

//RegEx
/* 
/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.
Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other. 
*/
