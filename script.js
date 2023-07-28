const nav = document.querySelector(".navBar");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
})

