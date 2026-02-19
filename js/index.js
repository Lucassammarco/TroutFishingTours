document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    setInterval(nextSlide, 7000); // cambia cada 7 segundos
});


document.querySelectorAll('.slider').forEach(slider => {

    const slides = slider.querySelectorAll('.slide');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');

    let current = 0;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
    }

    next.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prev.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

});

const values = document.querySelectorAll('.value-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

values.forEach(value => observer.observe(value));

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
