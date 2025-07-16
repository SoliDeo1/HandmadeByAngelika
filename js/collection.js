document.addEventListener("DOMContentLoaded", () => {
    // Glide инициализация
    const glideOptions = {
        type: "carousel",
        perView: 3,
        gap: 16,
        touchRatio: 1,
        keyboard: false,
        breakpoints: {
            1024: { perView: 3 },
            768: { perView: 2 },
            480: { perView: 1 },
        },
    };

    // Наведение мышки — чтобы знать, какая карусель в фокусе
    document.querySelectorAll(".glide").forEach((carousel) => {
        carousel.addEventListener("mouseenter", () => {
            carousel.classList.add("glide-focus");
        });
        carousel.addEventListener("mouseleave", () => {
            carousel.classList.remove("glide-focus");
        });
    });

    // Обработка клавиш в рамках только активной карусели
    document.addEventListener("keydown", (e) => {
        const focusedCarousel = document.querySelector(".glide-focus");
        if (!focusedCarousel) return;

        const arrows = focusedCarousel.querySelector(
            '[data-glide-el="controls"]'
        );
        if (!arrows) return;

        if (e.key === "ArrowRight") {
            arrows.querySelector('[data-glide-dir=">"]')?.click();
        } else if (e.key === "ArrowLeft") {
            arrows.querySelector('[data-glide-dir="<"]')?.click();
        }
    });

    ["#bags-carousel", "#socks-carousel", "#accessories-carousel"].forEach(
        (selector) => {
            const el = document.querySelector(selector);
            if (el) {
                new Glide(selector, glideOptions).mount();
            }
        }
    );

    // Оригинальные слайды (без клонов)
    let currentImageList = [];
    let currentIndex = -1;

    document.querySelectorAll(".glide").forEach((carousel) => {
        const slides = Array.from(
            carousel.querySelectorAll(".glide__slide:not(.glide__slide--clone)")
        );

        const images = slides.map((slide) =>
            slide.querySelector(".lightbox-img")
        );

        slides.forEach((slide, index) => {
            slide.style.cursor = "pointer";
            slide.addEventListener("click", () => {
                currentImageList = images;
                currentIndex = index;
                openLightbox(currentIndex);
            });
        });
    });

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    

    // Назначаем клики только на оригинальные слайды
   /*  slides.forEach((slide, index) => {
        slide.dataset.index = index;
        slide.style.cursor = "pointer";
        slide.addEventListener("click", () => {
            currentIndex = index;
            openLightbox(currentIndex);
        });
    }); */

    function openLightbox(index) {
        if (!currentImageList[index]) return;
        lightboxImg.src = currentImageList[index].src;
        lightbox.classList.add("active");
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImg.src = "";
    }

    function navigateLightbox(direction) {
        if (currentIndex === -1) return;
        currentIndex =
            (currentIndex + direction + currentImageList.length) % currentImageList.length;
        lightboxImg.src = currentImageList[currentIndex].src;
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
