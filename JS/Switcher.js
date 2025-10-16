// 🌈 Changer de thème couleur
function setActiveStyle(color) {
  document.querySelectorAll('.alternate-style').forEach((style) => {
    // Active la feuille de style correspondant au "title" passé
    style.disabled = style.getAttribute('title') !== color;
  });

  // Sauvegarde la couleur choisie dans le localStorage (facultatif)
  localStorage.setItem('selectedColor', color);
}

// 🧭 Ouvrir / fermer le style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// Ferme le switcher automatiquement au scroll (petit détail UX sympa)
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

//  Mode jour / nuit
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  const icon = dayNight.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  // Sauvegarde l'état du mode dans le localStorage
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem('themeMode', isDark ? 'dark' : 'light');
});

// 🔄 Restaurer le thème choisi lors du rechargement de la page
window.addEventListener("load", () => {
  // Restaure la couleur
  const savedColor = localStorage.getItem('selectedColor');
  if (savedColor) {
    setActiveStyle(savedColor);
  }

  // Restaure le mode sombre ou clair
  const savedTheme = localStorage.getItem('themeMode');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    dayNight.querySelector("i").classList.add('fa-sun');
    dayNight.querySelector("i").classList.remove('fa-moon');
  } else {
    document.body.classList.remove('dark');
    dayNight.querySelector("i").classList.remove('fa-sun');
    dayNight.querySelector("i").classList.add('fa-moon');
  }
});
