
// Recurso novo: animação dos elementos ao aparecerem na tela.

const elementos = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("revealed");
        observer.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elementos.forEach((elemento) => {
    observador.observe(elemento);
  });

} else {
  elementos.forEach((elemento) => {
    elemento.classList.add("revealed");
  });
}

// Botão para voltar ao topo da página.

const botaoTopo = document.querySelector(".back-to-top");

if (botaoTopo) {
  window.addEventListener("scroll", () => {
    botaoTopo.classList.toggle("visible", window.scrollY > 400);
  });
}
