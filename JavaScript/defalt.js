// Adding the toggle function when click on bar icon

// Variables
let ul = document.querySelector("ul");
let barBtn = document.querySelector(".fa-bars");

// Function
function toggleMenu() {
  if (barBtn.classList[1] === "fa-bars") {
    barBtn.classList.replace("fa-bars", "fa-xmark");
    ul.style.right = "0";
  } else if (barBtn.classList[1] === "fa-xmark") {
    barBtn.classList.replace("fa-xmark", "fa-bars");
    ul.style.right = "-100%";
  }
}

// Calling the function when click on hamburger Icon
barBtn.addEventListener("click", toggleMenu);

// // Dark mode on/off function

// Variables
let themeIcon = document.querySelector(".fa-moon");
let body = document.body;

// Function
function Changetheme() {
  if (themeIcon.classList[1] === "fa-moon") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    body.classList.add("theme");
  } else if (themeIcon.classList[1] === "fa-sun") {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    body.classList.remove("theme");
  }
}

// Calling function to change color of theme when click to themeIcon
themeIcon.addEventListener("click", Changetheme);

// Intersection Observer

let observer = new IntersectionObserver(
  (el) => {
    el.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      //  else {
      //   entry.target.classList.remove("show");
      // }
    });
  },
  {
    threshold: 0.4,
  }
);

let allhidden = document.querySelectorAll(".hidden");

allhidden.forEach((el) => observer.observe(el));

let topObserver = new IntersectionObserver(
  (el) => {
    el.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-top");
      }
      //  else {
      //   entry.target.classList.remove("show");
      // }
    });
  },
  {
    threshold: 0.4,
  }
);

let tophidden = document.querySelectorAll(".tophidden");

tophidden.forEach((el) => topObserver.observe(el));

// Intersection Observer
