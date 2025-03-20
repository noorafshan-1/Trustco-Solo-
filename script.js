document.getElementById("mobile-menu").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Set current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();
