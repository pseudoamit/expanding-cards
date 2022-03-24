// var color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];

// document.getElementById("card1").addEventListener("click", function () {
//   document.getElementById("card1").style.background =
//     color[Math.floor(Math.random() * color.length)];
// });

// // document.getElementsByClassName("card").addEventListener("click", function () {
// //   document.getElementsByClassName("card").style.background =
// //     color[Math.floor(Math.random() * color.length)];
// // });

// var card = document.getElementsByClassName("card");
// var text = document.getElementsByClassName("card__title");
// card.addEventListener("click", function makeVisible() {
//   for (let i = 0; i < card.length; i++) {
//     text.style.opacity = 1;
//   }
// });

// const cardImage = document.querySelectorAll(".card__image");
// const cardTitle = document.querySelectorAll(".card__title");

// cardTitle.forEach((e) => {
//   e.addEventListener("click", function () {
//     console.log("image clicked");
//     e.setAttribute("style", "opacity: 1;");
//   });
// });

// cardImage.forEach((e) => {
//   e.addEventListener("click", function () {
//     console.log("image clicked");
//     cardTitle.forEach((event) => {
//       event.setAttribute("style", "opacity: 1;");
//     });
//   });
// });

// card.forEach((e) => {
//   e.addEventListener("click", function () {
//     e.setAttribute("style", "width: 500px");
//   });
// });

const card = document.querySelectorAll(".card");

card.forEach((e) => {
  e.addEventListener("click", increasePicSize);
});

let selectedCard = null;

function increasePicSize() {
  if (selectedCard) {
    selectedCard.setAttribute("style", "width: 150px");
    selectedCard
      .getElementsByClassName("card__title")[0]
      .setAttribute("style", "opacity:0");
  }
  this.setAttribute("style", "width: 400px");

  this.getElementsByClassName("card__title")[0].setAttribute(
    "style",
    "opacity:1"
  );

  selectedCard = this;
}
