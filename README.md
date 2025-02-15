## SoftPet API
A SoftPet API é uma API RESTful desenvolvida com NestJS e MongoDB para gerenciamento de dados de animais de estimação em uma clínica veterinária fictícia. Ela permite o cadastro, consulta e atualização das informações dos pets cadastrados.

## 🚀 Tecnologias Usadas
- Typescript;
- Javascriot;
- NestJS: Framework para Node.js.
- MongoDB: Banco de dados NoSQL.
- Mongoose: ODM (Object Data Modeling) para MongoDB.
- Dotenv: Carrega variáveis de ambiente a partir de um arquivo .env.

## 📋 Requisitos
Antes de rodar a API, certifique-se de ter o seguinte instalado:

- Node.js (v14 ou superior)
- MongoDB Atlas (para conexão com o banco de dados)
- npm ou yarn

## ⚙️ Como Rodar a API Localmente
```bash
1- Clone o repositório:

2- git clone https://github.com/SEU_USUARIO/softpet-api.git

3- cd softpet-api

4- Instale as dependências:

npm install
# ou
yarn install

5 - Configure o arquivo .env:
Crie um arquivo .env na raiz do projeto com as variáveis de ambiente:
env
MONGO_URI=mongodb+srv://SEU_USUARIO:SEU_SENHA@cluster.mongodb.net/softpet?retryWrites=true&w=majority
PORT=3000

6- Substitua SEU_USUARIO e SEU_SENHA pelos valores correspondentes do seu cluster MongoDB Atlas.

7- Inicie o servidor:

npm run start
# ou
yarn start

A API estará rodando em http://localhost:3000.
```

## 🧑‍💻 Endpoints

1. Cadastro de Pets
POST /pet/create
Cadastrar um novo pet.

Exemplo de Request Body:
```bash
json
 {
      "petName": "Barney Castilho",
      "petSpecies": "Cachorro",
      "petBreed": "Pug",
      "petBirth": "2019-12-20T00:00:00.000Z",
      "petOwner": "Daniel Castilho",
      "ownerPhone": "81 91234-5678",
    }
```

2. Listar Pets (com lógica de paginação, 6 pets por página)
GET /pet/all-pets
Listar todos os pets cadastrados.

Exemplo de Response:
```bash
 {
      "_id": "67afdfcec8245c2b07e07548",
      "petName": "Joana Albuquerque",
      "petSpecies": "gato",
      "petBreed": "Vira Lata",
      "petBirth": "2024-07-07T00:00:00.000Z",
      "petOwner": "Sara Albuquerque",
      "ownerPhone": "81 91234-5678",
      "__v": 0
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 1,
    "totalPets": 6
  }
```

3. Atualizar Pets
PUT /api/pet/:id
Atualizar os dados de um paciente específico.

4. Excluir Pets
DELETE /pet/:id
Excluir um pet do sistema.

## 🔐 Segurança
Certifique-se de que a conexão com o banco de dados MongoDB esteja configurada corretamente, incluindo a verificação de IP no MongoDB Atlas. Para mais informações, consulte a documentação do MongoDB Atlas sobre IP Whitelisting.

## 📋 Licença
Este projeto está licenciado sob a MIT License.

Esse modelo já inclui as informações básicas que qualquer usuário ou desenvolvedor precisa para entender o que seu projeto faz e como ele pode ser rodado localmente. Se você quiser adicionar mais detalhes específicos ou ajustes, fique à vontade para editar!

## **Autor**
Projeto desenvolvido por [Ricardo Vitor Castilho](https://github.com/RicardoVCastilho)
