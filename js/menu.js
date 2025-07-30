const toggle = document.getElementById("hamburger");
const nav = document.getElementById("header_nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggle.classList.toggle("open"); // ← ここが追加！
});