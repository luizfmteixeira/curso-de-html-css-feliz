document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;

    function updateCarousel() {
        const track = document.querySelector(".carousel-track");
        const logos = document.querySelectorAll(".carousel-track img.logo");
        if (logos.length === 0) return; // Verifique se há logos para evitar erros
        const logoWidth = logos[0].offsetWidth + 30; // Inclui margem entre imagens
        track.style.transform = `translateX(-${currentIndex * logoWidth}px)`;
    }

    document.querySelector(".button-left").addEventListener("click", () => {
        const logos = document.querySelectorAll(".carousel-track img.logo");
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : logos.length - 1;
        updateCarousel();
    });

    document.querySelector(".button-right").addEventListener("click", () => {
        const logos = document.querySelectorAll(".carousel-track img.logo");
        currentIndex = (currentIndex < logos.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel); // Atualize ao redimensionar
});
