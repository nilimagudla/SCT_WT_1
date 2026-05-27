// Navbar scroll effect
window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {

    navbar.style.background = "#111827";
    navbar.style.padding = "15px 60px";
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";

  } else {

    navbar.style.background = "transparent";
    navbar.style.padding = "20px 60px";
    navbar.style.boxShadow = "none";
  }
});


// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Smooth fade-in effect while scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach((section) => {

    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

      section.style.opacity = "1";
      section.style.transform = "translateY(0px)";
    }
  });
});