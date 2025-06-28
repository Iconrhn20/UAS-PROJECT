

// Typing effect for typing-text
const typingText = document.querySelector(".typing-text span");
const cursor = document.querySelector(".cursor");
const words = ["Web Developer", "Web Designer", "Youtuber"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayedText = isDeleting
    ? currentWord.substring(0, charIndex > 0 ? charIndex-- : charIndex)
    : currentWord.substring(0, charIndex++);

  typingText.textContent = displayedText;
  if (cursor) {
    cursor.style.left = `${typingText.offsetWidth}px`;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// --- Logika untuk Menu Mobile ---
const mobileMenuButton = document.getElementById("mobile-menu");
const navBar = document.querySelector("nav");

if (mobileMenuButton && navBar) {
  mobileMenuButton.addEventListener("click", () => {
    navBar.classList.toggle("active");
    mobileMenuButton.querySelector("i").classList.toggle("bx-menu");
    mobileMenuButton.querySelector("i").classList.toggle("bx-x");
  });
}

// Optional: Menutup menu saat mengklik link navigasi
const navLinks = document.querySelectorAll("nav a");
if (navLinks.length > 0 && navBar) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navBar.classList.remove("active");
      if (mobileMenuButton) {
        mobileMenuButton.querySelector("i").classList.add("bx-menu");
        mobileMenuButton.querySelector("i").classList.remove("bx-x");
      }
    });
  });
}

// Optional: Efek background header saat discroll
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
