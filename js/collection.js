document.addEventListener("DOMContentLoaded", () => {
    // 1. Инициализация Glide
    const carousels = ["#bags-carousel", "#other-carousel"];
    const glideOptions = {
        type: "carousel",
        perView: 4,
        gap: 16,
        breakpoints: {
            1024: { perView: 3 },
            768: { perView: 2 },
            480: { perView: 1 },
        },
    };
    carousels.forEach((selector) => {
        const el = document.querySelector(selector);
        if (el) new Glide(selector, glideOptions).mount();
    });

    // 2. Настройка лайтбокса
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    // 3. Берём только оригиналы
    const allImages = Array.from(
        document.querySelectorAll(
            ".glide__slide:not(.glide__slide--clone) .lightbox-img"
        )
    );

    // 4. Проставляем data-index
    allImages.forEach((img, i) => {
        img.dataset.index = i;
    });

    let currentIndex = -1;

    // 5. Обработка клика
    document.addEventListener("click", (e) => {
        const img = e.target.closest(".lightbox-img");
        if (!img) return;

        // Найдём точный оригинал по src
        const clickedSrc = img.src;
        currentIndex = allImages.findIndex((image) => image.src === clickedSrc);

        if (currentIndex !== -1) {
            openLightbox(currentIndex);
        }
    });

    function openLightbox(index) {
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

    window.closeLightbox = closeLightbox;
    window.navigateLightbox = navigateLightbox;

    // 6. Кнопки и клавиши
    document
        .querySelector(".lightbox-close")
        ?.addEventListener("click", closeLightbox);
    document
        .querySelector(".lightbox-nav.left")
        ?.addEventListener("click", () => navigateLightbox(-1));
    document
        .querySelector(".lightbox-nav.right")
        ?.addEventListener("click", () => navigateLightbox(1));

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "ArrowLeft") navigateLightbox(-1);
        if (e.key === "ArrowRight") navigateLightbox(1);
        if (e.key === "Escape") closeLightbox();
    });

    // 7. Свайпы
    let touchStartX = 0;
    lightbox.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });
    lightbox.addEventListener("touchend", (e) => {
        const deltaX = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(deltaX) > 50) navigateLightbox(deltaX > 0 ? 1 : -1);
    });
});
