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