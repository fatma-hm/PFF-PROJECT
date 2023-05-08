// ------------------------------------LOGIN---------------------------------------------------
// let LoginForm = document.querySelector(".login-form-container");
// let formclose = document.querySelector("#form-close");
// let imgBtn = document.querySelectorAll(".img-btn");

// window.onscroll = () => {};

// formBotn.addEventListener("click", () => {
//   LoginForm.classList.add("active");
// });
// formclose.addEventListener("click", () => {
//   LoginForm.classList.remove("active");
// });
// imgBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     Document.querySelector(".controls . active").classList.remove("active");
//     btn.classList.add("active");
//     let src = btn.getAttribute("src");
//     Document.querySelector("#").src = src;
//   });
// });
// ----------------------------------------SLIDES----------------------------------------------------
// var swiper = new swiper(".product-slider", {
//   spaceBetween: 10,
//   loop: true,
//   centeredslides: true,
//   autoplay: {
//     delay: 9500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextE1: ".swiper-buttom-next",
//     prevE1: ".swiper-buttom-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerview: 1,
//     },
//     450: {
//       slidesPerview: 2,
//     },
//     768: {
//       slidesPerview: 3,
//     },
//     1024: {
//       slidesPerview: 4,
//     },
//   },
// });
// ----------------------------------------------CART-----------------------------------------------------
let cartIcon = document.querySelector("#cart-ion");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// --------open cart----------
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// ---------close carte -----------
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// // -------------cart working-----------
// if (document.readyState == "loading") {
//   Document.addEventListener("DOMcontentLoaded", ready);
// } else {
//   ready();
// }
// function ready() {
//   var removeCartButtons = document.getElementsByClassName("cart-remove");
//   console.log(removeCartButtons);
//   for (var i = 0; i < removeCartButtons.length; i++) {
//     var buttom = removeCartButtons[i];
//     buttom.addEventListener("click", removeCartItem);
//   }
// }

// function removeCartItem(event) {
//   var buttonclicked = event.target;
//   buttonClicked.parentElement.remove();
// }
