document.addEventListener("DOMContentLoaded", () => {
    // Glide инициализация
    const glideOptions = {
        type: "carousel",
        perView: 4,
        gap: 16,
        touchRatio: 1,
        breakpoints: {
            1024: { perView: 3 },
            768: { perView: 2 },
            480: { perView: 1 },
        },
    };

    ["#bags-carousel", "#other-carousel"].forEach((selector) => {
        const el = document.querySelector(selector);
        if (el) {
            new Glide(selector, glideOptions).mount();
        }
    });

    // Оригинальные слайды (без клонов)
    const slides = Array.from(
        document.querySelectorAll(".glide__slide:not(.glide__slide--clone)")
    );
    const allImages = slides.map((slide) =>
        slide.querySelector(".lightbox-img")
    );

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    let currentIndex = -1;

    // Назначаем клики только на оригинальные слайды
    slides.forEach((slide, index) => {
        slide.dataset.index = index;
        slide.style.cursor = "pointer";
        slide.addEventListener("click", () => {
            currentIndex = index;
            openLightbox(currentIndex);
        });
    });

    function openLightbox(index) {
        if (!allImages[index]) return;
        lightboxImg.src = allImages[index].src;
        lightbox.classList.add("active");
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImg.src = "";
    }

    function navigateLightbox(direction) {
        if (currentIndex === -1) return;
        currentIndex =
            (currentIndex + direction + allImages.length) % allImages.length;
        lightboxImg.src = allImages[currentIndex].src;
    }

    // Глобальные функции (для onclick в HTML)
    window.closeLightbox = closeLightbox;
    window.navigateLightbox = navigateLightbox;

    // Клавиши
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "ArrowLeft") navigateLightbox(-1);
        if (e.key === "ArrowRight") navigateLightbox(1);
        if (e.key === "Escape") closeLightbox();
    });

    // Свайп на мобильных
    let touchStartX = 0;
    lightbox.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });
    lightbox.addEventListener("touchend", (e) => {
        const deltaX = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(deltaX) > 50) {
            navigateLightbox(deltaX > 0 ? 1 : -1);
        }
    });

    // Клик вне изображения — закрытие
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
});
