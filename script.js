document.getElementById("mobile-menu").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Set current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
