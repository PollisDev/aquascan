document.addEventListener('DOMContentLoaded', function() {
  function atualizarSensores() {
    const ph = (6.5 + Math.random() * 1.5).toFixed(1);
    const turbidez = (Math.random() * 10).toFixed(1);
    document.getElementById('valor-ph').textContent = ph;
    document.getElementById('valor-turbidez').textContent = turbidez;
  }

  setInterval(atualizarSensores, 2000);
  atualizarSensores();

  document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    alert('Obrigado, ' + nome + '! Sua mensagem foi enviada.');
    this.reset();
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth'
        });
      }
    });
  });
});