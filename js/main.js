function navbarBranco() {
  const navbar = document.querySelector(".navbar");
  addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-light");
    } else {
      navbar.classList.remove("bg-light");
    }
  });
}

function menuMobileBranco() {
  const navbar = document.querySelector(".navbar");
  const btn = document.querySelector(".navbar-toggler");

  btn.addEventListener("click", () => {
    navbar.classList.add("bg-light");
  });
}

navbarBranco();
menuMobileBranco();
