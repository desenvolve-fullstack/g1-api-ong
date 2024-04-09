# ONG Management System
Sistema de gestão de doações e distribuição de alimentos para ONGs.

## Problema
Você recebeu o contato de uma ONG (Organização não Governamental) que trabalha com distribuição de alimentos para outras ONGs, de acordo com o que pedem. A ONG recebe as doações em pacotes, com diversos alimentos dentro, armazena e depois entrega essas doações em outros pacotes.
A Organização não Governamental na qual você tem o contato pode receber um pacote com 200 kg de arroz, 100kg de feijão e 300 latas de óleo, e recebe um pedido de outra ONG pedindo a doação de 30kg de arroz, 10kg de feijão e 15 latas de óleo. Para isso, a entrega deve ser feita com outros pacotes, visto que será necessária uma separação diferente.

### Objetivo
Criar uma API RESTful e Frontend para:
- gestão de produtos
- controle de produtos doados
- gestão de ongs
- registro de pedido
- controle de estoque

### Proposta
- Registre o recebimento dos pacotes, assim como também cadastre separadamente os produtos recebidos de acordo com o peso ou unidades;
- Registre os pedidos de doação, com as quantidades de produtos solicitadas;
- Valide se é possível atender aos pedidos;
- Emite uma listagem completa dos pedidos efetuados;
- Emite uma listagem do estado atual do estoque de alimentos;
- Efetue a entrega de um pedido, fazendo a baixa das quantidades no estoque e registrando a entrega.

### Arquitetura
![Diagrama](./src/docs/Desenvolve-Projeto-Ong.png)

## Setup

- [NodeJs](https://nodejs.org/en/download)
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [DBeaver](https://dbeaver.io/download/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Inicie o container do banco de dados PostgreSQL

1. Clone este repositório
```bash
  git clone https://github.com/desenvolve-fullstack/g1-api-ong.git
```

3. Navegue até a pasta raiz do projeto
```bash
  cd g1-api-ong
```

5. Execute o comando docker
```bash
  docker compose up -d db
```

4. Acesse o DBeaver e faça a conexão com o banco de dados
  > Host: localhost\
  > Porta: 5432 (padrão)\
  > Usuário: pguser\
  > Senha: pgpwd\
  > DB name: ong

## Executando o projeto

1. Clone este repositório
```bash
  git clone https://github.com/desenvolve-fullstack/g1-api-ong.git
```

2. Caso já tenha esse repositório em seu computador, mas esteja desatualizado, faça o pull do projeto
```bash
  git pull
```

3. Instale as dependências
```bash
  npm install
```

4. Execute a build
```bash
  npm run build
```

5. Execute o projeto
```bash
  npm run dev
```

5. Crie o arquivo de env de desenvolvimento (.development.env) e use as propriedades que estão descritas em .env.example. Os dados do banco foram fornecidos no item 4 da configuração do postgres. [Clique aqui para acessar](#inicie-o-container-do-banco-de-dados-postgresql) 
.



## Acordos

### Github Branchs
  - Devemos manter e não cometer violação nas proteções das branchs main
  - Devemos usar o git flow para ramificações:
    - Branch prefixes:
      - Branch de nova funcionalidade? [feature/]
      - Branch de correção? [fix/]
      - Branch de bug? [hotfix/]
      - Branch de melhoria? [refactor/]
      - Branch de mudança nas configurações? [chore/]
      - Branch de testes? [test/]
  
      Após a barra " / " , o número da task do kanban, em seguida o nome da tarefa separando por traço " - ", como por exemplo: feature/12345-get-task.
### Github PRs 
- Para os PRs de uma branch para main é necessário o review de duas pessoas.
- Na descrição do PR descrever objetivo e o que foi desenvolvido de forma clara.
