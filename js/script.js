function flipImage(card) {
    card.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const allImages = Array.from(document.querySelectorAll(".carousel img"));
    let currentIndex = -1;

    // Открытие лайтбокса при клике
    allImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        lightboxImg.src = allImages[currentIndex].src;
        lightbox.classList.remove("hidden"); // убрать hidden
        lightbox.classList.add("active");    // добавить active
    }

    function closeLightbox() {
        lightbox.classList.remove("active");  // убрать active
        lightbox.classList.add("hidden");     // добавить hidden
        lightboxImg.src = "";
        currentIndex = -1;
    }
    
    window.closeLightbox = closeLightbox;
    function navigateLightbox(direction) {
        if (currentIndex === -1) return;
        currentIndex =
            (currentIndex + direction + allImages.length) % allImages.length;
        lightboxImg.src = allImages[currentIndex].src;
    }
    window.navigateLightbox = navigateLightbox;

    // Кнопки навигации и закрытия
    document
        .querySelector(".lightbox-close")
        .addEventListener("click", closeLightbox);
    document
        .querySelector(".lightbox-nav.left")
        .addEventListener("click", () => navigateLightbox(-1));
    document
        .querySelector(".lightbox-nav.right")
        .addEventListener("click", () => navigateLightbox(1));

    // Закрытие при клике на фон
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Навигация с клавиатуры
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;

        if (e.key === "ArrowLeft") navigateLightbox(-1);
        else if (e.key === "ArrowRight") navigateLightbox(1);
        else if (e.key === "Escape") closeLightbox();
    });

    // Навигация свайпом на мобильных
    let touchStartX = 0;
    lightbox.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    lightbox.addEventListener("touchend", (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;
        if (Math.abs(deltaX) > 50) {
            navigateLightbox(deltaX > 0 ? 1 : -1);
        }
    });

});

// Прокрутка карусели (глобально, чтобы работало через inline onclick)
function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const scrollAmount = 300;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
    });
}
