let formBotn = document.querySelector("#search-btn");
let LoginForm = document.querySelector(".login-form-container");
let formclose = document.querySelector("#form-close");
let imgBtn = document.querySelectorAll(".img-btn");

window.onscroll = () => {};

formBotn.addEventListener("click", () => {
  LoginForm.classList.add("active");
});
formclose.addEventListener("click", () => {
  LoginForm.classList.remove("active");
});
imgBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    Document.querySelector(".controls . active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("src");
    Document.querySelector("#").src = src;
  });
});
