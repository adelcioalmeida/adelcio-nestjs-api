# 🔐 Adelcio NestJS API

API backend desenvolvida com **NestJS**, **TypeScript**, **Prisma ORM** e **MySQL**, com foco em estudo e prática de autenticação de usuários.

O projeto implementa cadastro, login, geração de token JWT, criptografia de senhas e proteção de rotas.

---

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- NestJS
- MySQL
- Prisma ORM
- JWT
- Passport
- Passport JWT
- bcrypt
- Swagger / OpenAPI
- class-validator
- class-transformer
- npm
- Git
- GitHub

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido para praticar conceitos relacionados ao desenvolvimento backend, principalmente:

- Criação de APIs REST
- NestJS
- TypeScript
- Banco de dados relacional
- Prisma ORM
- Autenticação
- JWT
- Criptografia de senhas
- Proteção de rotas
- DTOs
- Validação de dados
- Swagger
- Variáveis de ambiente
- Git e GitHub

---

## ⚙️ Funcionalidades

Atualmente a API possui:

- Cadastro de usuários
- Validação de e-mail já cadastrado
- Criptografia de senha utilizando bcrypt
- Login utilizando e-mail e senha
- Validação da senha criptografada
- Geração de token JWT
- Rota protegida utilizando JWT
- Integração com MySQL através do Prisma
- Validação dos dados recebidos pela API
- Documentação dos endpoints com Swagger

---

## 📡 Endpoints

### Cadastro

```http
POST /auth/cadastro
```

Exemplo:

```json
{
  "nome": "Adelcio",
  "email": "adelcio@email.com",
  "senha": "123456"
}
```

---

### Login

```http
POST /auth/login
```

Exemplo:

```json
{
  "email": "adelcio@email.com",
  "senha": "123456"
}
```

Quando as credenciais estão corretas, a API retorna um token JWT.

Exemplo:

```json
{
  "access_token": "TOKEN_JWT",
  "usuario": {
    "id": 1,
    "nome": "Adelcio",
    "email": "adelcio@email.com"
  }
}
```

---

### Perfil protegido

```http
GET /auth/perfil
```

Essa rota utiliza autenticação JWT.

O usuário precisa enviar um token válido para conseguir acessar o endpoint.

---

## 🗄️ Banco de dados

O projeto utiliza **MySQL** como banco de dados.

A comunicação entre a aplicação e o banco é realizada utilizando o **Prisma ORM**.

### Model de usuário

```prisma
model Usuario {
  id    Int    @id @default(autoincrement())
  nome  String
  email String @unique
  senha String
}
```

O campo `email` é único para impedir o cadastro de usuários duplicados.

---

## 🔒 Segurança

### Criptografia de senha

Antes de salvar uma senha no banco de dados, a aplicação utiliza o **bcrypt** para gerar um hash.

Dessa forma, a senha original não fica armazenada diretamente no banco.

---

### JWT

Após um login válido, a aplicação gera um **JSON Web Token (JWT)**.

O token contém informações utilizadas para identificar o usuário durante o acesso às rotas protegidas.

---

## 🛡️ Proteção de rotas

A rota:

```http
GET /auth/perfil
```

é protegida utilizando um `JwtAuthGuard`.

Somente requisições autenticadas com um token JWT válido podem acessá-la.

---

## ✅ Validação de dados

A aplicação utiliza:

- class-validator
- class-transformer
- ValidationPipe

O `ValidationPipe` está configurado globalmente para validar os dados recebidos pela API.

Também são rejeitados campos que não fazem parte dos DTOs esperados.

---

## 📖 Swagger

A documentação da API é gerada utilizando Swagger/OpenAPI.

Depois de iniciar o projeto, acesse:

```text
http://localhost:3000/api
```

Na interface do Swagger é possível visualizar e testar os endpoints da API.

---

## 📁 Estrutura principal

```text
adelcio-nestjs-api/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── auth/
│   │   ├── dto/
│   │   ├── guards/
│   │   ├── strategies/
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   │
│   ├── prisma/
│   │
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/
├── .env.example
├── .gitignore
├── package.json
├── prisma.config.ts
└── tsconfig.json
```

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/adelcioalmeida/adelcio-nestjs-api.git
```

### 2. Entre na pasta

```bash
cd adelcio-nestjs-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Utilize o arquivo:

```text
.env.example
```

como referência para criar seu arquivo:

```text
.env
```

Configure a conexão com o banco de dados e as demais variáveis necessárias.

---

### 5. Gere o Prisma Client

```bash
npx prisma generate
```

### 6. Execute as migrations

```bash
npx prisma migrate dev
```

### 7. Inicie a aplicação

```bash
npm run start:dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

E o Swagger em:

```text
http://localhost:3000/api
```

---

## 🧪 Testes

O projeto possui configuração para testes utilizando Jest.

Executar testes:

```bash
npm run test
```

Executar testes E2E:

```bash
npm run test:e2e
```

Verificar cobertura:

```bash
npm run test:cov
```

---

## 📌 Status do projeto

🚧 **Em desenvolvimento**

O projeto continuará recebendo melhorias conforme o avanço dos estudos em desenvolvimento backend.

---

## 👨‍💻 Autor

**Adelcio Almeida**

Tecnólogo em Análise e Desenvolvimento de Sistemas.

GitHub:  
https://github.com/adelcioalmeida
