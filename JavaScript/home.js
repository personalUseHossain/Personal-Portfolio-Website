// // Dark mode on/off function

// Variables
let themeIcon = document.querySelector(".fa-moon");
let heroContainer = document.querySelector(".hero-container");

// Function
function Changetheme() {
  if (themeIcon.classList[1] === "fa-moon") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    heroContainer.classList.add("theme");
  } else if (themeIcon.classList[1] === "fa-sun") {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    heroContainer.classList.remove("theme");
  }
}

// Calling function to change color of theme when click to themeIcon
themeIcon.addEventListener("click", Changetheme);
