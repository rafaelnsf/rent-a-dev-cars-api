Este é um projeto básico em NestJS, que demonstra a estrutura e a configuração de um aplicativo usando o framework NestJS. Ele inclui a criação de entidades, serviços, controladores, validações, integração com o TypeORM e outras funcionalidades comuns em um aplicativo NestJS.

Comandos
Aqui estão os comandos utilizados neste projeto:

Instalação das Dependências
npm install

Executar o Aplicativo Localmente
npm run start
O aplicativo será executado em http://localhost:3000.

Gerar uma Nova Migration
npm run typeorm:migration:generate ./db/migrations
Este comando irá gerar uma nova migração de banco de dados

Executar as Migrations do Banco de Dados
npm run typeorm:run
Este comando irá executar as migrações do banco de dados.

Gerar uma Nova seed
npm run typeorm-seed:create ./db/seeds
Este comando irá gerar uma nova seed de banco de dados

Executar as seeds do Banco de Dados
npm run typeorm-seed:run
Este comando irá executar as migrações do banco de dados.

