

// Essa função muda a cor da barra de navegação ao rolar o scroll para baixo no eixo y acima de 0

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

// Essa função muda a cor da barra de navegação ao clicar no botão mobile. 

function menuMobileBranco() {
  const navbar = document.querySelector(".navbar");
  const btn = document.querySelector(".navbar-toggler");

  btn.addEventListener("click", () => {
    navbar.classList.add("bg-light");
  });
}


// Envia um alerta ao dar submit no formulario avisando que ele está em construção

function btnMsg(){
  alert("formulário em construção")
}


// Rodando as funções
navbarBranco();
menuMobileBranco();
