/* $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1, // или 2, 3, сколько нужно
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
}); */

const user = {
    name: 'Alex',
    sayHi() {
        setTimeout(function () {
            console.log(`Hi, my name is ${this.name}`);
        }, 1000)
    },
};
user.sayHi();