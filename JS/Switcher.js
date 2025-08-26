// Changer de thème couleur
function setActiveStyle(color) {
    document.querySelectorAll('.alternate-style').forEach((style) => {
        style.disabled = style.getAttribute('title') !== color;
    });
}

// Ouvrir/fermer le style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});

// Mode jour / nuit
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
