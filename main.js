"use strict";

//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  //   console.log(`navbarHeight:${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
  navbarMenu.classList.remove("open");
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

// navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbar.classList.add("navbar--dark");
  navbarMenu.classList.toggle("open");
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//Mack home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const Projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous itme and select the new
  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  }
  e.target.classList.add("selected");

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    Projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
        console.log(project.className);
      } else {
        project.classList.add("invisible");
        console.log(project.className);
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
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
