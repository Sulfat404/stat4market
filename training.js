const burger = document.querySelector(".burger__wrapper");
const sticks  = document.querySelectorAll(".burger__stick");
const menuBurger = document.querySelectorAll(".burger__menu");
let body = document.querySelector(".body");


burger.addEventListener("click", openBurger);

function openBurger() {
  if(burger.classList.contains("open")) {
    return closeBurger();
  }
  body.classList.add("noscroll");
  burger.classList.add("open");
  sticks.forEach((stick) => stick.classList.add("open"));
  menuBurger.forEach((item) => item.classList.add("open"));
}

function closeBurger() {
  let arrOfOpenElem = document.querySelectorAll(".open");
  arrOfOpenElem.forEach((elem) => elem.classList.remove("open"));
  body.classList.remove("noscroll");
}