document.addEventListener('DOMContentLoaded', () => {
  // 📌 Configurações
  const PHONE = '5598991186693'; // WhatsApp do casal
  const MAP_URL = 'https://maps.app.goo.gl/rMnKLf6nru8uN3eV8';

  // 👉 Botão de confirmar presença abre WhatsApp
  const confirmBtn = document.getElementById('confirmBtn');
  confirmBtn.addEventListener('click', () => {
    const msg = encodeURIComponent("Confirmo minha presença como padrinho/madrinha! 🎉");
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  });

  // 👉 Botão de localização
  const mapBtn = document.getElementById('mapBtn');
  mapBtn.href = MAP_URL;

  // 👉 Botão de presentes com mensagem engraçada
  const giftsBtn = document.getElementById('giftsBtn');
  giftsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("💌 Como ainda estamos nos preparando para lua de mel e a casa, aceitamos o presente no valor de PIX 😅");
  });
});
