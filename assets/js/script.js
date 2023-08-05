const nav = document.getElementById("nav");
const up = document.getElementById("up");
const navLink = document.getElementById("navlink");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-js");
    up.classList.add("up-js");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-js");
    up.classList.remove("up-js");
  }
});

const navbar = document.querySelector(".navbar").querySelectorAll("a");
const section = document.querySelectorAll("section");

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navbar.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".navbar ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
