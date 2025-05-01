function verificarResposta(botaoClicado, proximaPagina) {
  const correta = botaoClicado.getAttribute("data-correta") === "true";
  const resultado = document.getElementById("resultado");

  if (correta) {
    resultado.textContent = "✅ Resposta correta!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ Resposta errada.";
    resultado.style.color = "red";
  }

  setTimeout(function () {
    window.location.href = proximaPagina;
  }, 2000);
}
