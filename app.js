const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const body = document.querySelector("body");

button1.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "hsl(198, 60%, 50%)";
  setTimeout(function () {
    e.target.style.backgroundColor = "hsl(176, 68%, 64%)";
  }, 200);
});

button2.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "hsl(198, 60%, 50%)";
  setTimeout(function () {
    e.target.style.backgroundColor = "hsl(176, 68%, 64%)";
  }, 200);
  validation();
});

function validation() {
  const form = document.querySelector("#form");
  const container = document.querySelector(".form-container");
  const email = form.value;
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(pattern)) {
    container.classList.add("valid");
    container.classList.remove("invalid");
  } else {
    container.classList.remove("valid");
    container.classList.add("invalid");
  }
  console.log(email);
}
