"use strict";

// =========================
// Sticky Navigation
// =========================

const navbar = document.querySelector(".navbar");
const trigger = document.querySelector(".nav-trigger");

if (navbar && trigger) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    },
    {
      threshold: 0,
    }
  );

  observer.observe(trigger);
}

// =========================
// Services Carousel
// =========================

const services = [
  {
    number: "01 / 04",
    title: "PRIVATE PILATES",
    image: "images/private-pilates.webp",
    alt: "woman performing pilates pose",
    description:
      "One-to-one, group and clinical Pilates tailored to your goals, experience and lifestyle.",
    link: "private.html",
  },

  {
    number: "02 / 04",
    title: "CORPORATE PILATES",
    image: "images/corporate-pilates.webp",
    alt: "group of people holding pilates pose",
    description:
      "Movement sessions designed to support workplace wellbeing, posture and mobility.",
    link: "corporate.html",
  },

  {
    number: "03 / 04",
    title: "PRE & POST NATAL PILATES",
    image: "images/prenatal-pilates.webp",
    alt: "pregnant women performing pilates pose",
    description:
      "Safe and supportive Pilates tailored through pregnancy and postpartum recovery.",
    link: "prenatal.html",
  },

  {
    number: "04 / 04",
    title: "HEN PARTIES & CELEBRATIONS",
    image: "images/hen-pilates.webp",
    alt: "two women laughing",
    description:
      "A memorable Pilates experience designed for celebrations and special occasions.",
    link: "hen-parties.html",
  },
];

let currentSlide = 0;

const serviceImage = document.querySelector(".service-img");
const serviceNumber = document.querySelector(".service-number");
const serviceTitle = document.querySelector(".service-content h3");
const serviceDescription = document.querySelector(".service-content p");
const serviceLink = document.querySelector(".learn-more");

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".prev");

function updateService() {
  const service = services[currentSlide];

  serviceImage.src = service.image;
  serviceImage.alt = service.alt;

  serviceNumber.textContent = service.number;

  serviceTitle.textContent = service.title;

  serviceDescription.textContent = service.description;

  serviceLink.href = service.link;
}

if (
  serviceImage &&
  serviceNumber &&
  serviceTitle &&
  serviceDescription &&
  serviceLink &&
  nextButton &&
  previousButton
) {
  updateService();

  nextButton.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= services.length) {
      currentSlide = 0;
    }

    updateService();
  });

  previousButton.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = services.length - 1;
    }

    updateService();
  });
}

// =========================
// Mobile Hamburger Menu
// =========================

const hamburger = document.querySelector(".hamburger");

if (hamburger && navbar) {
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("menu-open");

    hamburger.classList.toggle("active");
  });
}

// =========================
// Close Menu After Clicking Link
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("menu-open");

    hamburger.classList.remove("active");

    hamburger.setAttribute("aria-expanded", "false");
  });
});
