const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector("nav.menu");   

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  nav.setAttribute("aria-hidden", String(isOpen)); 
  toggle.setAttribute("aria-expanded", String(!isOpen)); 
});

document.body.classList.toggle('noscroll', willOpen);
//ajoute la classe noscroll au body si le menu est ouvert (willOpen est true)
