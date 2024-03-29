// start js code --

// get all input elements--
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

// target the submit button--
let btn = document.getElementById("btn");

// run a function that will chack input fields--
btn.addEventListener("click", (e) => {
  //   add condition-
  if (name.value === "" || email.value === "") {
    return alert("Please enter your name and email");
  }
  if (message.value === "") {
    return alert("Write your message first");
  }
});

// end js code --
