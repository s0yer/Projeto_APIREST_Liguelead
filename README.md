# Projeto_APIREST_Liguelead


============##################===========##########################==============

> Rodar em Modo Desenvolvimento - Local
Rodar a API diretamente - sem Docker:

Instalar dependências:
-no terminal
>npm install

-Instalar e configurar MySql
Para rodar localmente, o MySQL deve estar acessível via localhost e as credenciais do seu .env devem estar corretas.
>configurar db.js no projeto

Rodar o servidor com Nodemon - monitoramento de alterações:
-rodar na pasta src
>nodemon server.js

ou

node --watch server.js


============##################===========##########################==============


# 🚀 API REST: Gerenciamento de Projetos e Tarefas

Esta API RESTful, desenvolvida em Node.js e Express, é projetada para gerenciar o ciclo de vida (CRUD) de Projetos e Tarefas, utilizando uma arquitetura em camadas (controllers → services → repositories)e boas práticas de desenvolvimento (SOLID, TDD).

A aplicação utiliza Sequelize como ORM para comunicação com o banco de dados MySQL, sendo facilmente inicializável via Docker Compose.

## 📦 Stack Tecnológica

| Categoria | Tecnologia | Justificativa |

| **Linguagem/Runtime** | Node.js (v20+) | Alta performance para I/O e modelo não bloqueante. |
| **Framework Web** | Express | Framework minimalista e flexível para rotas e middlewares. |
| **Banco de Dados** | MySQL (via Docker) | Banco de dados relacional robusto e amplamente utilizado. |
| **ORM** | Sequelize | Mapeador Objeto-Relacional que abstrai o SQL e gerencia Models/Migrações. |
| **Ambiente** | Docker / Docker Compose | Garante ambiente consistente e isolado para desenvolvimento. |
| **Desenvolvimento** | Nodemon, ES Modules | Agilidade no desenvolvimento com recarregamento automático e sintaxe moderna. |

## 📐 Arquitetura do Projeto

O projeto segue o padrão **Arquitetura em Camadas** (semelhante à Clean Architecture e Microservices ), promovendo o Princípio da Responsabilidade Única (SRP) e facilitando a testabilidade (TDD).

1.  **Controllers**: Recebem e respondem requisições HTTP. Delegam a lógica para a camada de Service.
2.  **Services**: Contêm toda a Lógica de Negócios e regras de validação. Coordenam operações e lidam com integrações externas.
3.  **Repositories**: Abstraem o acesso a dados. Usam o Sequelize para realizar as operações CRUD no banco de dados.

## 🛠️ Configuração e Inicialização

### Pré-requisitos

Certifique-se de ter instalado:
* Node.js (versão 20 ou superior)
* Docker e Docker Compose

### 1. Inicializar o Ambiente Docker

Use o Docker Compose para subir a API e o MySQL:

# Sobe o container do MySQL e o container da API, e reconstrói a imagem Node.js
docker-compose up --build -d





