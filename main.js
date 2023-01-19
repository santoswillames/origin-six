const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll("nav ul li a");
const header = document.querySelector("#header");
const navHight = header.offsetHeight;

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

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
