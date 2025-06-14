document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dataInput = document.getElementById('data');

  const hoje = new Date();
  const hojeFormatado = hoje.toISOString().split('T')[0];
  dataInput.setAttribute('min', hojeFormatado);

  dataInput.addEventListener('change', function () {
    const dataSelecionada = new Date(this.value);
    const diaSemana = dataSelecionada.getDay();

    if (diaSemana === 1 || diaSemana === 6) {
      alert('Selecione um dia útil (segunda a sexta-feira).');
      this.value = ''; // Limpa o campo
    }
  });
});
