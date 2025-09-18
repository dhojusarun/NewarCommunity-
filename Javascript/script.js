// element retrieve
let form = document.contact;
// console.log(formEle);
let fname = form.fname;
// document.contact.fname;
// console.log(fname);
let email = form.email;
// console.log(email);

// let fnames = document.getElementById("fname");
// console.log(fnames)
/*
 *Event
 *
 *element.addEventListener("event", callback_funtion())
 */
form.addEventListener("submit", function (e) {
  if (fname.value == "") {
    // empty chek
    alert("Full name is required!");
    e.preventDefault();
    // stops submission or page reload
  }
  if (email.value == "") {
    // empty chek
    alert("E-mail is required!");
    e.preventDefault();
    // stops submission or page reload
  }
});
document.getElementById("email").addEventListener("keyup", function () {
  if (this.value.length <= 4) {
    this.nextElementSibling.innerText = "E-mail is invalid";
  } else {
    this.nextElementSibling.innerText = "";
  }
});
