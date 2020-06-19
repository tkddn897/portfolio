"use strict";

//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight:${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTO = document.querySelector(selector);
  scrollTO.scrollIntoView({ behavior: "smooth", block: "center" });
}

// const about = document.querySelector("#about");

// about.addEventListener("click", () => {
//   console.log(about);
//
// });
// switch (link) {
//     case "#about":
//       window.scroll({
//         top: 580,
//         left: 0,
//         behavior: "smooth",
//       });
//       break;
//     case "#skills":
//       window.scroll({
//         top: 1356,
//         left: 0,
//         behavior: "smooth",
//       });
//       break;
//     case "#work":
//       window.scroll({
//         top: 1948,
//         left: 0,
//         behavior: "smooth",
//       });
//       break;
//     case "#testimonial":
//       window.scroll({
//         top: 2592,
//         left: 0,
//         behavior: "smooth",
//       });
//       break;
//     case "#contact":
//       window.scroll({
//         top: 3118,
//         left: 0,
//         behavior: "smooth",
//       });
//       break;
//     default:
//       break;
//   }
