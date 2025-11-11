
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector("nav.menu");   

toggle.addEventListener("click", () => {
  nav.setAttribute("aria-hidden", "false"); 
  toggle.setAttribute("aria-expanded", "true"); 
});


