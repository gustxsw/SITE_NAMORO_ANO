function mostrarSpoiler() {
  const spoiler = document.getElementById("spoiler");
  spoiler.classList.remove("escondido");
}

function atualizarContagemRegressiva() {
  const agora = new Date();
  const dataAlvo = new Date("2025-05-01T00:00:00");
  const diff = dataAlvo - agora;

  if (diff <= 0) {
    document.getElementById("tempo").textContent = "o momento chegou!";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById(
    "tempo"
  ).textContent = `${dias} dias, ${horas}h, ${minutos}min, ${segundos}s`;
}

setInterval(atualizarContagemRegressiva, 1000);
atualizarContagemRegressiva();

function mostrarAmor() {
  const msg = document.getElementById("mensagemAmor");
  msg.textContent = "G + N = 💘";
}
