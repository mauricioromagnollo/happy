<div align='justify'>

<div align='center'>

![](./layout/export/banner.png)

### **Sistema para agendamento de visitas em orfanatos.<br>*"Leve Felicidade para o Mundo"***

![BADGE_WEB_REACT] ![BADGE_MOBILE_REACT_NATIVE] ![BADGE_SERVER_NODEJS] ![BADGE_TYPESCRIPT] ![BADGE_NODE_VERSION] ![BADGE_NPM_VERSION] ![BADGE_LICENSE] ![BADGE_OPEN_SOURCE] ![BADGE_OPEN_ISSUES] ![BADGE_CLOSED_ISSUES] ![BADGE_STARS] ![BADGE_FORKS]

</div>

## **:rocket: OBJETIVO**


O objetivo do projeto é apresentar as pessoas quais são os orfanatos existentes na sua região. Incentivar as pessoas a visitarem os orfanatos da sua região e facilitar o controle de visitas através de agendamentos pelo sistema. Fazendo com que fique bem organizado e melhore a vida das crianças que vivem nos orfanatos.


## **:computer: TECNOLOGIAS**

- ### **WEB (FRONT-END)**
  - **[React]** 
    - **[React Icons](https://react-icons.github.io/react-icons/)**
    - **[React Router Dom](https://reactrouter.com/web/guides/quick-start)**
    - **[Leaflet](https://leafletjs.com/) | [React Leaflet](https://react-leaflet.js.org/)**
  - **[TypeScript]** 
  
  Veja o arquivo [package.json](./src/web/package.json).

- ### **SERVER (BACK-END)**
  - **[NodeJS](https://nodejs.org/en/)**
  - **[TypeScript]** 
    - **[ts-node-dev](https://github.com/whitecolor/ts-node-dev)**
  - **[Express](https://expressjs.com/)**
    - **[express-async-errors](https://www.npmjs.com/package/express-async-errors)**
    - **[Cors](http://expressjs.com/en/resources/middleware/cors.html)**
    - **[Multer](https://github.com/expressjs/multer)**
  - **[DotENV](https://github.com/motdotla/dotenv)**
  - **[TypeORM](https://typeorm.io/#/)**
  - **[SQLite](https://www.npmjs.com/package/sqlite3)**
  - **[Yup](https://github.com/jquense/yup)**
  
  Veja o arquivo [package.json](./src/server/package.json).

- ### **FERRAMENTAS AUXILIARES**
 
  - **[Whimsical]**
  - **[Figma](https://www.figma.com/)**
  - **[Google Fonts](https://fonts.google.com/) ( [Nunito](https://fonts.google.com/specimen/Nunito) )**
  - **[Insomnia](https://insomnia.rest/)**
  - **[Beekeeper Studio](https://www.beekeeperstudio.io/)**

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **GPL-3.0 LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

</div>

<!-- BADGES --->

[BADGE_LICENSE]: https://img.shields.io/github/license/x0n4d0/happy

[BADGE_CLOSED_ISSUES]: https://img.shields.io/github/issues-closed/x0n4d0/happy?color=red

[BADGE_OPEN_ISSUES]: https://img.shields.io/github/issues/x0n4d0/happy?color=green

[BADGE_STARS]: https://img.shields.io/github/stars/x0n4d0/happy?style=social

[BADGE_FORKS]: https://img.shields.io/github/forks/x0n4d0/happy?style=social

[BADGE_TYPESCRIPT]: https://badges.frapsoft.com/typescript/code/typescript.png?v=101

[BADGE_OPEN_SOURCE]: https://badges.frapsoft.com/os/v1/open-source.png?v=103

[BADGE_NODE_VERSION]: https://img.shields.io/badge/node-12.18.4-green

[BADGE_NPM_VERSION]: https://img.shields.io/badge/npm-6.14.6-red

[BADGE_WEB_REACT]: https://img.shields.io/badge/web-react-blue

[BADGE_MOBILE_REACT_NATIVE]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[BADGE_SERVER_NODEJS]: https://img.shields.io/badge/server-nodejs-important

<!-- LINKS --->

[Whimsical]: https://whimsical.com/
[React]: https://reactjs.org/
[TypeScript]: https://www.typescriptlang.org/

<!-- 
# Configuração do Ambiente:

$ yarn create react-app web --template typescript








Font: Nuninto
https://fonts.google.com/specimen/Nunito

React Icons
https://react-icons.github.io/react-icons/
$ yarn add react-icons

React Router Dom
https://reactrouter.com/web/guides/quick-start
$ yarn add react-router-dom
$ yarn add @types/react-router-dom -D

Leaflet
https://leafletjs.com/
https://react-leaflet.js.org/
$ yarn add leaflet react-leaflet
$ yarn add -D @types/react-leaflet

=============================
BACKEND
=============================

- dotenv
- express
- ts-node-dev
- typeorm
- sqlite3

$ yarn init -y 
$ yarn add express 
$ yarn add -D @types/express
$ yarn tsc --init
$ yarn add ts-node-dev -D
$ yarn add typeorm sqlite3


# Criar uma migration:
$ yarn typeorm migration:run

# Métodos HTTP

GET = Buscar uma informação
POST = Criar uma nova informação
PUT = Alterar uma informação
DELETE = Deletar uma informação

# Parâmetros

Query Params: http://localhost:3333/users?search=diego (Pesquisar) => request.query
Route Params: http://localhost:3333/users/1 (Identificar um recurso => Alterar) => request.params
Body: http://localhost:3333/users/ (Buscar dados de um formulário...); => request.body 

# Rota
 
...

# Recurso

... 

# Criando uma migration para criação de orfanatos:
$ yarn typeorm migration:create -n create_orphanages

# Migration para criação da tabela de imagens:
$ yarn typeorm migration:create -n create_images

# Executando a criação da migration:
$ yarn typeorm migration:run

# Desfazer a última migration feita:
$ yarn typeorm migration:revert

--->
