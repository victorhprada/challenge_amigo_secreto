# Projeto: Sorteio de Amigos

Este projeto tem como objetivo fortalecer habilidades em lógica de programação, permitindo ao usuário:

1. Adicionar nomes de amigos em uma lista.
2. Exibir e atualizar a lista dinamicamente.
3. Sortear um nome aleatório da lista.

### Funcionalidades
Adicionar um amigo

Captura o nome inserido no campo de entrada.

Valida se o nome é válido (não vazio).

Adiciona o nome na lista de amigos.

Atualizar a lista.

Exibe a lista de amigos cadastrados como itens HTML ("li").

Remove duplicidades ou elementos antigos antes de adicionar novos.

Sortear um amigo.

Seleciona um nome aleatório da lista usando Math.random() e Math.floor().

Exibe o nome sorteado em uma área específica da página.

Valida se existem amigos cadastrados antes de realizar o sorteio.

Limpar o campo de entrada.

Reseta o campo de entrada após cada operação de adição.

### Como Executar

Certifique-se de ter um navegador web moderno (como Chrome, Firefox ou Edge).

Baixe ou clone o repositório do projeto.

Abra o arquivo index.html no navegador.

Use a interface para:

1. Adicionar amigos.
2. Visualizar a lista atualizada.
3. Realizar sorteios.

### Estrutura do Código

Arquivo app.js

#### Este arquivo contém toda a lógica principal:

- adicionarAmigo(): Lê o valor do campo de entrada, valida e adiciona o nome na lista.
- atualizaAmigos(): Renderiza a lista de amigos como elementos <li> dentro de uma lista HTML.
- sortearAmigo(): Realiza o sorteio e exibe o nome escolhido.
- limparCampo(): Limpa o campo de entrada após cada operação.

### Tecnologias Utilizadas

- HTML: Estrutura da interface.
- CSS: (opcional) Para estilização da interface.
- JavaScript: Lógica de programação para manipulação do DOM e funções principais.


