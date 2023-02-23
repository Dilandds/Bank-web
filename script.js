"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//scroll function to the button in the hero
btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

//smooth scoll navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
  //remove default behaviour of anchors
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    //if the click comes from the button
    const id = e.target.getAttribute("href"); // the the destiunation atttached to it
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" }); //add the scroll to destination
  }
});

//Tabbed component

const tabcontainer = document.querySelector(".operations__tab-container");
const tab = document.querySelectorAll(".operations__tab");

tabcontainer.addEventListener("click", function (e) {
  //find the parent elemet of the target which is ".operations__tab"
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked.dataset.tab);

  //background is clicked it will return null so exit from the function
  if (!clicked) return;
  //remove active from all
  tab.forEach((t) => t.classList.remove("operations__tab--active"));
  //add only active to the wanted class
  clicked.classList.add("operations__tab--active");

  //wanted content
  const wanted_content = document.querySelector(
    `.operations__content--${clicked.dataset.tab}`
  );
  //remove unwanted content
  document
    .querySelectorAll(".operations__content")
    .forEach((t) => t.classList.remove("operations__content--active"));
  //add the wanted content
  wanted_content.classList.add("operations__content--active");
});
