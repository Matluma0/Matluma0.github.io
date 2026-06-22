console.log("JS connecté !");

window.addEventListener("load", function() {
    document.querySelector(".contenu").style.opacity = "1";
});

// Menu hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Ferme le menu quand on clique sur un lien
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});