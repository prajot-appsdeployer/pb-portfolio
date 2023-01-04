const navbar = document.getElementById("navbar");
const brandName = document.getElementById("brand-name");

// on scroll effects
const mediaQuery = window.matchMedia("(max-width: 990px)");
if (mediaQuery.matches) {
  window.onload = function() {
    
    navbar.classList.add("navbar-dark", "nav-color");
  };

  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false,
  });

  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      bsCollapse.toggle();
    });
  });
} else {

  

  const navbarLinks = document.querySelectorAll("#navbar a");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

}

// on scroll navbar big screen
window.addEventListener("scroll", (e) => {


  if (mediaQuery.matches) {
    if (window.pageYOffset > 0) {
      navbar.classList.add("add-shadow", "navbar-dark", "nav-color");
    } else {
      navbar.classList.remove("add-shadow");
    }
  } else {
    if (window.pageYOffset > 0) {

      navbar.classList.add("add-shadow", "navbar-dark", "nav-color");
    } else {
      navbar.classList.remove("add-shadow", "navbar-dark", "nav-color");
    }
  }
});


