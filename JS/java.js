<div class="bars">☰</div>

const bars = document.querySelector(".bars");
const nav = document.querySelector("nav");

bars.onclick = () => {
  nav.classList.toggle("active");
};
