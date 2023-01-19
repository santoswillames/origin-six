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
