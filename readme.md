# 🦷 Clínica DentalCare – Página de Agendamento e Serviços Odontológicos

Este é um projeto web para uma clínica odontológica fictícia chamada **DentalCare**. A página foi desenvolvida com foco em acessibilidade, responsividade e interatividade para oferecer uma experiência fluida ao usuário, permitindo o agendamento de consultas e a visualização dos serviços oferecidos.

---

## 🧩 Estrutura da Página

A aplicação está dividida em seções principais:

- **Navbar:** Navegação superior com logotipo e links para seções.
- **Banner:** Imagem de destaque com lista de serviços principais.
- **Formulário de Agendamento:** Permite ao usuário preencher seus dados e agendar um serviço.
- **Lista de Agendamentos:** Exibe os agendamentos feitos, com opção de exclusão.
- **Benefícios:** Cards destacando os diferenciais da clínica.
- **Equipe:** Apresentação dos profissionais da clínica.
- **Rodapé:** Informações de contato e endereço.
- **Modal de Confirmação:** Confirma visualmente que o agendamento foi realizado.

---

## 🎨 Justificativa do Design

- **Cores:**  
  As cores utilizadas são suaves e profissionais, transmitindo confiança e higiene, características importantes para um ambiente odontológico.

- **Fontes:**  
  Tipografia clean e sem serifa para leitura confortável. Títulos possuem destaque com pesos maiores.

- **Responsividade:**  
  O layout utiliza `flexbox` e `media queries` para garantir boa visualização em celulares, tablets e desktops.

---

## ⚙️ Funcionalidades JavaScript

### 1. **Validação do Formulário**

- Verifica se os campos obrigatórios foram preenchidos corretamente (e-mail, telefone, documento).
- Impede submissão com dados inválidos.

### 2. **Agendamento com Modal de Confirmação**

- Exibe um modal após o preenchimento válido do formulário.
- O modal mostra nome, serviço e data formatada.

```javascript
const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
msg.textContent = `Agendamos para ${nome} uma ${servico.toLowerCase()} no dia ${dataFormatada}.`;
```

### 3. Exibição de Agendamentos

Cada agendamento feito é exibido dinamicamente na página com botão para exclusão.

```javascript
const agendamentoDiv = document.createElement('div');
agendamentoDiv.innerHTML = `
  <strong>${nome}</strong> - ${servico} em ${dataFormatada}
  <button class="btn-excluir">Excluir</button>
`;
```

### 4. Mensagem de Nenhum Agendamento

Exibe uma mensagem como "Você não tem nenhum agendamento" quando a lista está vazia.

### 5. Exclusão de Agendamento

Botões "Excluir" removem agendamentos individualmente e atualizam a lista.

### 6. Tema Claro/Escuro

Um botão alterna entre modo claro e escuro. A preferência do usuário é salva no localStorage.

```javascript
botaoTema.addEventListener('click', function () {
  body.classList.toggle('tema-escuro');
  localStorage.setItem(
    'tema',
    body.classList.contains('tema-escuro') ? 'escuro' : 'claro'
  );
});
```

### 7. Boas-vindas Dinâmica

Um alert exibe uma saudação de acordo com o horário: Bom dia, Boa tarde ou Boa noite.

```javascript
const hora = new Date().getHours();
if (hora < 12) {
  alert('Bom dia! Seja bem-vindo à DentalCare!');
} else if (hora < 18) {
  alert('Boa tarde! Seja bem-vindo à DentalCare!');
} else {
  alert('Boa noite! Seja bem-vindo à DentalCare!');
}
```

### 8. Alteração de Estilo com change

Ao trocar o serviço no select, o campo de data muda sua cor para destacar que deve ser preenchido.

---

## 📁 Estrutura de Pastas

```
📁 src/
├── js/
│   ├── script.js
│   └── agendamento.js
├── styles/
│   ├── agendamento.css
│   ├── modal.css
│   ├── nav.css
│   ├── header.css
│   ├── cards.css
│   ├── equipe.css
│   └── footer.css
├── logo.svg
├── banner.png
├── ...
```

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox e Media Queries)
- JavaScript Vanilla (sem frameworks)
- Responsivo e acessível
- Armazenamento local com localStorage

## ✍️ Autor

Projeto desenvolvido por Lívia Noronha para fins acadêmicos.

---
