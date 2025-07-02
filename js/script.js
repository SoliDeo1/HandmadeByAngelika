$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1, // или 2, 3, сколько нужно
        loop: true,
        margin: 10,
        nav: true,
        navText: ["←", "→"],
        autoplay: true,
        autoplayTimeout: 3000,
    });
});

function flipImage(card) {
    card.classList.toggle("flipped");
}

/* function flipImage(card) {
    card.classList.toggle('flipped');
  } */

/* $(".owl-carousel").owlCarousel({
    nav: true,                    // 🔹 включает стрелки
              // 🔹 можно заменить на SVG или Unicode
    loop: true,
    margin: 10,
    items: 3,
    autoplay: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  }); */
document.querySelectorAll(".carousel img").forEach((img) => {
    img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.className = "image-modal";
        modal.innerHTML = `
        <div class="image-modal-bg"></div>
        <img src="${img.src}" alt="${img.alt}" />
      `;
        document.body.appendChild(modal);
        modal.addEventListener("click", () => modal.remove());
    });
});
