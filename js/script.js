function flipImage(card) {
    card.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector(".nav-container ul");

    burger.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
});
