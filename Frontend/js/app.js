document.addEventListener("DOMContentLoaded", function() {
    // Cambia el navbar al hacer scroll
    window.addEventListener("scroll", function() {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Anima las tarjetas de productos cuando aparecen en pantalla
    let cards = document.querySelectorAll(".custom-card");
    let options = { threshold: 0.5 };
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = "0.2s";
                entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
            }
        });
    }, options);

    cards.forEach(card => observer.observe(card));
});
