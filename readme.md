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
![image](https://github.com/user-attachments/assets/335ca0f9-0d92-4b9c-b2e1-063f1e484ac3)

### 3. Exibição de Agendamentos

Cada agendamento feito é exibido dinamicamente na página com botão para exclusão.

```javascript
const novo = document.createElement('div');
    novo.classList.add('agendamento-item');
    novo.innerHTML = `
    <strong>${nome}</strong> agendou <em>${servico.toLowerCase()}</em><br>
    📅 ${dataFormatada} | 📞 ${telefone} | ✉️ ${email}
    <br>
    <button class="btn-excluir">Excluir agendamento</button>
  `;
```
![image](https://github.com/user-attachments/assets/384bf384-fdec-4cc4-b2a9-df94209f5781)


### 4. Mensagem de Nenhum Agendamento

Exibe uma mensagem como "Você não tem nenhum agendamento" quando a lista está vazia.

### 5. Exclusão de Agendamento

Botões "Excluir agendamento" removem agendamentos individualmente e atualizam a lista.


### 7. Boas-vindas Dinâmica

Um alert exibe uma saudação de acordo com o horário: Bom dia, Boa tarde ou Boa noite.

```javascript
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
```


## 📁 Estrutura de Pastas

```
📁 src/
├── js/
│   ├── script.js
│   └── agendamento.js
│   └── saudacao.js
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
- JavaScript (sem frameworks)
- Responsivo e acessível

## ✍️ Autor

Projeto desenvolvido por Lívia Noronha para fins acadêmicos.

---
