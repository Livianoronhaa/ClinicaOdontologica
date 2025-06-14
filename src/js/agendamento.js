document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form-agendamento');
  form.reset();
  const modal = document.getElementById('modal-confirmacao');
  const fecharModal = document.getElementById('fechar-modal');
  const btnConfirmar = document.getElementById('btn-confirmar-modal');
  const msg = document.getElementById('mensagem-confirmacao');
  const listaAgendamentos = document.getElementById('lista-agendamentos');

  let dadosAgendamento = {};

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Captura dos valores
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const documento = document.getElementById('documento').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^\d{10,11}$/;

    if (!nome) {
      alert('Por favor, preencha seu nome.');
      return;
    }

    if (!email || !emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    if (!documento || documento.length < 8) {
      alert('Informe um documento válido com pelo menos 8 caracteres.');
      return;
    }

    if (!telefoneRegex.test(telefone)) {
      alert('Digite um número de telefone válido com DDD (apenas números).');
      return;
    }

    if (!servico) {
      alert('Selecione um serviço desejado.');
      return;
    }

    if (!data) {
      alert('Escolha uma data.');
      return;
    }

    const dataSelecionada = new Date(data);
    const diaSemana = dataSelecionada.getDay();
    if (diaSemana === 0 || diaSemana === 6) {
      alert('Selecione um dia útil (segunda a sexta-feira).');
      return;
    }

    dadosAgendamento = { nome, email, documento, telefone, servico, data };

    // Exibe o modal
    const dataFormatada = dataSelecionada.toLocaleDateString('pt-BR');
    msg.textContent = `Agendamos para ${nome} uma ${servico.toLowerCase()} no dia ${dataFormatada}.`;
    modal.style.display = 'flex';
  });

  fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  btnConfirmar.addEventListener('click', () => {
    modal.style.display = 'none';

    const { nome, email, telefone, servico, data } = dadosAgendamento;
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR');

    const novo = document.createElement('div');
    novo.classList.add('agendamento-item');

    novo.innerHTML = `
    <strong>${nome}</strong> agendou <em>${servico.toLowerCase()}</em><br>
    📅 ${dataFormatada} | 📞 ${telefone} | ✉️ ${email}
    <br>
    <button class="btn-excluir">Excluir agendamento</button>
  `;
    form.reset();

    novo.querySelector('.btn-excluir').addEventListener('click', () => {
      novo.remove();

      if (listaAgendamentos.children.length === 0) {
        mensagemVazia.style.display = 'block';
      }
    });

    listaAgendamentos.appendChild(novo);
    mensagemVazia.style.display = 'none';

    form.reset();
  });

  // Fecha o modal clicando fora dele
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const selectServico = document.getElementById('servico');
  const descricao = document.getElementById('descricao-servico');

  const explicacoes = {
    'Cirurgia oral': 'Procedimento para remoção de dentes ou correções ósseas.',
    'Radiografia odontológica':
      'Exame para avaliação de estruturas internas da boca.',
    'Tratamento de canal':
      'Remoção da polpa dentária inflamada ou infeccionada.',
    'Aparelho Ortodôntico': 'Ajuste da posição dos dentes e mordida.',
    'Consulta de rotina': 'Avaliação geral da sua saúde bucal.',
    'Restauração dentária':
      'Correção de cáries e recuperação da forma do dente.',
  };

  selectServico.addEventListener('change', function () {
    const servicoSelecionado = selectServico.value;
    descricao.textContent = explicacoes[servicoSelecionado] || '';
  });
});
