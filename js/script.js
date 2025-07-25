function flipImage(card) {
    card.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav ul");
    const overlay = document.querySelector(".overlay");
  
    burger.addEventListener("click", () => {
      navList.classList.toggle("open");
      overlay.classList.toggle("active");
    });
  
    overlay.addEventListener("click", () => {
      navList.classList.remove("open");
      overlay.classList.remove("active");
    });
  });
  
