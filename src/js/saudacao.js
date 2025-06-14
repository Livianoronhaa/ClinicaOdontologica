document.addEventListener('DOMContentLoaded', function () {
  const saudacao = gerarSaudacao();
  alert(`${saudacao}, seja bem-vindo(a) à Clínica DentalCare!`);
});

function gerarSaudacao() {
  const hora = new Date().getHours();

  if (hora >= 5 && hora < 12) {
    return 'Bom dia';
  } else if (hora >= 12 && hora < 18) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
}
