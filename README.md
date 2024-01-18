# Chat Time

Bem-vindo ao Chat Time, um projeto de chat que proporciona uma experiência única. Abaixo, apresentam-se algumas características essenciais do projeto:

## Visão Geral

Este projeto consiste em um chat que impõe limitações para garantir uma experiência controlada e exclusiva. As principais características incluem:

- **Limite de Usuários Simultâneos:** O Chat Time é projetado para acomodar até 10 usuários simultaneamente, promovendo interações mais intimistas e gerenciáveis.
- **Tempo Limitado:** Cada sessão de chat é limitada a um período de 10 minutos. Após esse intervalo, a conta do usuário será automaticamente excluída, proporcionando uma abordagem única e temporária ao Chat Time.

## Como Utilizar

- **Cadastro de Conta:** Para começar, os usuários devem se cadastrar e criar uma conta no sistema.
- **Acesso ao Chat:** Após o cadastro, os usuários podem acessar o Chat Time e interagir com outros participantes.
- **Limitações de Tempo e Usuários:** Esteja ciente das limitações de 10 usuários simultâneos e do tempo máximo de 10 minutos por sessão.

## Tecnologias Utilizadas

O Chat Time foi desenvolvido utilizando as seguintes tecnologias:

- [React](https://reactjs.org/) (^18.2.0)
- [Axios](https://axios-http.com/) (^1.6.3)
- [Day.js](https://day.js.org/) (^1.11.10)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) (^9.1.3)
- [React Chat Engine Advanced](https://www.npmjs.com/package/react-chat-engine-advanced) (^0.1.28)
- [Express](https://expressjs.com/pt-br/) (^4.18.2)

## Passo a Passo para Executar o Projeto Chat Time

O projeto Chat Time está dividido em duas pastas: `frontend` e `backend`. Siga os passos abaixo para configurar e rodar ambas as partes do projeto:

### 1. Configuração do Backend:

#### a. Instalação de Dependências:

No diretório `backend`, execute o seguinte comando para instalar as dependências necessárias:

```bash
cd backend
npm install
```

ou

```bash
cd backend
yarn install
```

#### b. Configuração do Arquivo .env:

Crie um arquivo `.env` no diretório `backend` com as configurações necessárias, como a URL do backend. Exemplo:

```env
PRIVATE_KEY=
```

Para obter a chave, faça login em [Chat Engine](https://chatengine.io/) e vá em configurações do projeto.

#### c. Iniciar o Servidor Backend:

Execute o seguinte comando para iniciar o servidor backend:

```bash
npm run start
```

ou

```bash
yarn run start
```

O backend estará em execução em `http://localhost:4000` (ou a porta que você configurou).

### 2. Configuração do Frontend:

#### a. Instalação de Dependências:

No diretório `frontend`, execute o seguinte comando para instalar as dependências necessárias:

```bash
cd frontend
npm install
```

ou

```bash
cd frontend
yarn install
```

#### b. Iniciar o Servidor Frontend:

Execute o seguinte comando para iniciar o servidor frontend:

```bash
npm run dev
```

ou

```bash
yarn run dev
```

O frontend estará em execução em `http://localhost:5173` (ou a porta que você configurou).

### 3. Acesso ao Chat Time:

Abra o navegador e acesse `http://localhost:5173` para iniciar o Chat Time. Agora, você pode interagir no chat, observando as limitações de usuários simultâneos e tempo definidas no projeto.

Lembre-se de que o backend e o frontend devem estar em execução simultaneamente para garantir o correto funcionamento do projeto. Divirta-se explorando o Chat Time!
