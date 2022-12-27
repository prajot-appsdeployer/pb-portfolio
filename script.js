// too add Shadow on scroll
window.addEventListener("scroll", (e) => {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("add-shadow", "navbar-dark", "nav-color");
  } else {
    navbar.classList.remove("add-shadow", "navbar-dark", "nav-color");
  }
});

// Navbar active
const navbarLinks = document.querySelectorAll("#navbar a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navbarLinks.forEach((link) => {
      link.classList.remove("active");
    });

    link.classList.add("active");
  });
});
