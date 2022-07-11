let body = document.querySelector(".hero");
let menu = document.querySelector(".menu");
let navList = document.querySelector(".top-nav");
let links = document.querySelectorAll(".nav-link");
let currentLink = document.querySelector(".nav-link-inverted");
let images = document.querySelectorAll("img");
let media = window.matchMedia("(min-width: 376px)");

// Setting mobile || desktop images based on screen size
function setImgSrc(_media) {
   if (_media.matches) {
      images.forEach((image) => {
         const newImageSrc = image.src.replace("mobile", "desktop");
         image.src = newImageSrc;
      });
   } else {
      images.forEach((image) => {
         const newImageSrc = image.src.replace("desktop", "mobile");
         image.src = newImageSrc;
      });
   }
}

function openMenu() {
   navList.classList.toggle("open");
}

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

menu.addEventListener("click", openMenu);

setImgSrc(media);
media.addListener(setImgSrc);
