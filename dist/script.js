const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-default");


navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden");
});

