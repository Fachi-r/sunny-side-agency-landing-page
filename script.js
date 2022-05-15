let menu = document.querySelector(".menu");
let navList = document.querySelector(".top-nav");
let links = document.querySelectorAll(".nav-link");
let currentLink = document.querySelector(".nav-link-inverted");
let body = document.querySelector(".hero");

function openMenu() {
  navList.classList.toggle("open");
}

menu.addEventListener("click", openMenu);

links.forEach((link) =>
  link.addEventListener("click", (e) => {
    {
      if (e.currentTarget.classList.contains("nav-link-inverted")) return;
      e.currentTarget.classList.toggle("nav-link-inverted");
      currentLink.classList.replace("nav-link-inverted", "nav-link");
      currentLink = e.currentTarget;
      links = document.querySelectorAll(".nav-link");
    }
  })
);