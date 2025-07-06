document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const allImages = Array.from(
        document.querySelectorAll("#bags-carousel img, #other-carousel img")
    );
    let currentIndex = -1;

    // Открытие лайтбокса при клике
    allImages.forEach((img, index) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            currentIndex = index;
            openLightbox(currentIndex);
        });
    });

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = allImages[currentIndex].src;
        lightbox.classList.add("active");
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImg.src = "";
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

new Glide(".glide").mount();

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("#bags-carousel")) {
        new Glide("#bags-carousel", {
            type: "carousel",
            touchRatio: 1,
            perView: 4,
            gap: 16,
            breakpoints: {
                1024: {
                    perView: 3,
                },
                768: {
                    perView: 2,
                },
                480: {
                    perView: 1,
                },
            },
        }).mount();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("#other-carousel")) {
        new Glide("#other-carousel", {
            type: "carousel",
            perView: 4,
            touchRatio: 1,
            gap: 16,
            peek: 0,
            breakpoints: {
                1024: {
                    perView: 3,
                },
                768: {
                    perView: 2,
                },
                480: {
                    perView: 1,
                },
            },
        }).mount();
    }
});
