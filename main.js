const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll("nav ul li a");

function showMenu(element, action) {
  element.addEventListener("click", function () {
    if (action === "toggle") {
      nav.classList.toggle("show");
    } else {
      nav.classList.remove("show");
    }
  });
}

for (const element of toggle) {
  showMenu(element, "toggle");
}

for (const element of links) {
  showMenu(element, "remove");
}

function changeHeaderWhenScroll() {
  const header = document.querySelector("#header");
  const navHight = header.offsetHeight;

  if (window.scrollY >= navHight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

function backToTop() {
  const buttonBackToTop = document.querySelector(".back-to-top");

  if (this.window.scrollY >= 560) {
    buttonBackToTop.classList.add("show");
  } else {
    buttonBackToTop.classList.remove("show");
  }
}

window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
});

// Testimonials slider - swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  mousewheel: true,
  slidesPerView: 1,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
#home .image, #home .text,
 #about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .swiper-wrapper,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
);
