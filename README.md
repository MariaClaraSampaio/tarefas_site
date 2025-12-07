# 📘 Projeto Final – Banco de Dados (Curso Técnico)

Este projeto foi desenvolvido como **trabalho final da disciplina de Banco de Dados** do meu curso técnico.  
A aplicação utiliza **Node.js + Express + Sequelize** e faz o gerenciamento de **usuários, tarefas e aniversários**.  
O banco de dados utilizado é **SQLite**, armazenado localmente no arquivo `database.sqlite`.

---

## 🚀 Tecnologias Utilizadas

<p>

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-3A76F0?style=for-the-badge&logo=sequelize&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E96228?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-2965F1?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</p>

---

## 📦 Sobre o Projeto

O sistema permite:

- Cadastro e login de usuários  
- Criação, listagem, edição e exclusão de tarefas  
- Gerenciamento de aniversários  
- Sessões de login usando **express-session**  
- Persistência de dados usando **SQLite**  

Tudo feito com Node.js e Sequelize para facilitar o acesso ao banco e a criação das tabelas automaticamente.

---

## 🧭 Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/MariaClaraSampaio/tarefas_site.git
cd tarefas_site
```

### 2️⃣ Instalar as dependências
```bash
npm install
```

### 3️⃣ Iniciar o servidor
```bash
node server.js
```

### 🌐 Acessar o sistema
Abra no navegador:  
**http://localhost:3000**

---

## 🗃 Banco de Dados (SQLite)

- Arquivo: `database.sqlite`  
- Criado automaticamente pelo Sequelize  
- Não precisa instalar MySQL  
- Todos os dados ficam salvos mesmo após fechar o servidor  
- Para reiniciar o banco do zero, basta deletar o arquivo:

```
database.sqlite
```

O Sequelize recria tudo automaticamente ao iniciar o servidor.

---

## 🗂 Estrutura do Projeto

```
tarefas_site/
├── server.js          # Servidor Express
├── db.js              # Configuração do Sequelize
├── database.sqlite    # Banco de dados SQLite
├── models/            # Modelos Sequelize
│   ├── Usuario.js
│   ├── Tarefa.js
│   └── Aniversario.js
└── public/            # Páginas HTML
    ├── login.html
    ├── cadastro.html
    ├── tarefas.html
    └── aniversario.html

```

---

## ✨ Funcionalidades

- ✔ Sistema de autenticação  
- ✔ CRUD de tarefas  
- ✔ CRUD de aniversários  
- ✔ Sessões com express-session  
- ✔ Banco de dados local via SQLite  

---

## 👩‍🏫 Observações para o Professor

- Este projeto é o **trabalho final da disciplina de Banco de Dados**.  
- O banco já contém dados reais usados nos testes.  
- Pode ser visualizado usando ferramentas como **DB Browser for SQLite**.  
- Caso deseje usar MySQL, basta alterar em `db.js`:

```js
dialect: "mysql"
```

E configurar um arquivo `.env` com host, usuário, senha e nome do banco.

---

## 📝 Notas da Desenvolvedora

Durante o desenvolvimento, alguns pontos importantes:

### ⚠ Problema com MySQL
Houve erro por causa da porta incorreta do servidor MySQL local, impedindo a conexão com o Sequelize.

### 🔄 Solução
Troca para **SQLite**, que não precisa de servidor instalado.

### ✅ Resultado
- Mais fácil de testar  
- Sem erros de porta ou conexão  
- Banco funcionando direto no arquivo local  

---

## 💛 Créditos

Desenvolvido por **Maria Clara**  
Projeto final da disciplina de **Banco de Dados – Curso Técnico**

---

