let typewritertxt = document.querySelector(".typewriter");

function typewriterfuntion() {
  setTimeout(() => {
    typewritertxt.innerHTML = "Freelacer";
  }, 2000);
  setTimeout(() => {
    typewritertxt.innerHTML = "Gamer";
  }, 6000);
  setTimeout(() => {
    typewritertxt.innerHTML = "Designer";
  }, 10000);
}

typewriterfuntion();
setInterval(() => {
  typewriterfuntion();
}, 12000);
