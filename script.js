// Mobile navigation: open the menu and keep its accessibility state in sync.
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu when a visitor selects a section.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// If images/guido.jpg is not present yet, the designed initials placeholder remains visible.
const profilePhoto = document.querySelector("#profile-photo");
profilePhoto.addEventListener("error", () => profilePhoto.classList.add("is-hidden"));

// Add a gentle entrance animation only when sections enter the viewport.
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

// Update the year automatically.
document.querySelector("#year").textContent = new Date().getFullYear();
