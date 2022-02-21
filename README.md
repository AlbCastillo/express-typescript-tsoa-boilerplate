# Express Typescript TSOA Boilerplate

This is a boilerplate for quickly building RESTful APIs using Node.js, Express, TSOA and Typescript

This template comes with many features as : JWT authentication,hexagonal architecture, unit and integration tests, Model, Service & Controller (Module) generator
Swagger documentation, dependency injection container, error handler, logging system and others.

- [Branch: Mongoose](https://github.com/AlbCastillo/express-typescript-tsoa-boilerplate/tree/mongoose): Branch to use a MongoDB using mongoose as ODM
- [Branch: Sequelize](): Branch to use PostgreSQL using sequelize as ORM

## Table of Contents
- [Express TSOA Typescript Boilerplate](#express-tsoa-typescript-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Interesting Dependencies](#interesting-dependecies)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Build a new module using Plop](#build-a-new-module-using-plop)
    - [Sequelize Migrations and Seedings](#sequelize-migrations-and-seedings)
    - [Swagger-Documentation](#swagger-documentation)
    - [Husky hook](#husky-hook)
    - [Available scripts](#available-scripts)
- [Inspirations](#inspirations)
- [License](#license)


## Interesting Dependencies

- [TypeScript](https://www.typescriptlang.org/) : Language

- [Express.js](https://expressjs.com/): Lightweight web-server application framework

- [TSOA](https://tsoa-community.github.io/docs/getting-started.html): Clean Architecture Framework with integrated OpenAPI

- [TSyringe](https://github.com/microsoft/tsyringe): A lightweight dependency injection container for TypeScript/JavaScript for constructor injection.

- [Sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript#readme): ORM 

- [Helmet](https://helmetjs.github.io): Secure Express apps by setting HTTP headers 
  
- [Lodash](https://lodash.com): Utility library
  
- [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express): Documentation generator & hosting

- [ESLint](https://eslint.org/):  Linting and formatting code using

- [Dotenv](https://github.com/motdotla/dotenv): Configuration of environment variables

- [EditorConfig](https://editorconfig.org/)
  for maintain consistent coding style - TBC

- [Winston](https://github.com/winstonjs/winston) : Logging

- [Morgan](https://github.com/expressjs/morgan#readme): HTTP request logger middleware

- [Jest](https://jestjs.io/): Testing

- [Serialize-error](https://github.com/sindresorhus/serialize-error): Serialize an Error object into a plain object 

- [Supertest](https://github.com/visionmedia/supertest) : high-level abstraction for testing HTTP

- [Nodemon](https://nodemon.io/): Hot reloading

- [Plop](https://plopjs.com/documentation/) : Micro-generator framework to create Controllers,Models & Services

- [Husky](https://typicode.github.io/husky/#): Commit checker


## Getting Started

### Installation
It is recommendable install these dependecies as global:
```ts-node```
```nodemon```
```tsoa```
1. install the dependencies using yarn:  
``` bash
 yarn install
```
2. Rename the file `.env.example` to `.env` (Edit the file if needed).

You can use the command 
```bash
cp .env.example to .env
```
3. Prepare husky hooks : 
```bash
yarn prepare:husky
```
4. Build the TSOA routes
```bash
yarn build
```
5. Run the application with live reloading 
```bash
yarn dev
```
6. After that, go to:
 ```http://localhost:8080```


### Build a new module using Plop

1. Execute the command:
 ```yarn plop:module ```
2. Follow the terminal's instructions

Generated files when the command is executed(name & version are prompt's input):

- **Model** : *src/api/v<version>/<name>.model.ts*
- **Service**: *src/api/v<version>/<name>sService.ts*
- **Controller**: *src/api/v<version>/<name>sController.ts*
- **RequestBody Interface**: *src/common/requestBody/<xxx>.ts*
- **Migration** : *src/migrations/<YYYYMMDDHHmmss>-create-<name>s.js*
- **Seeder** : *src/seeders/<YYYMMMDDHHmmss>-popultate-<name>.js*

### Sequelize Migrations and Seedings
- To execute migrations : 
```bash 
  yarn make:migrations
```
- To undo migrations:
```bash
 yarn undo:migrations
```
- To execute all seeders:
```bash 
  yarn make:seedings
```
- To undo all seeders:
```bash
 yarn undo:seedings
```
### Swagger-Documentation

API Documentation is automatically generated and hosted under `/api-doc`

To update your API Documentation you must modified the file ```src/swagger.json```
### Husyk hook
**pre-commit** : Execute the command ```yarn lint:fix``` before to do a commit

Avoid hook : **git commit -m "Your message" --no-verify**
### Available scripts

- `yarn build` - Build the routes and specs from tsoa and compile typescript.
- `yarn lint` - Lint your TS code,
- `yarn lint:fix` - Lint and automatically fix your TS code.
- `yarn dev` - Run the server locally.
- `yarn clean` - Remove build, tsoa_generated and coverage folders,
- `yarn test` - Run all tests.
- `yarn test:unit` - Run unit tests.
- `yarn test:integration` - Run integration tests.
- `yarn plop:module` -  generate a new module for API with a simple CRUD including migration and seeder
- `yarn ts:sequelize`: prefix to execute any sequelize-cli command
- `yarn make:migrations`: execute sequelize migrations
- `yarn undo:migrations`: undo sequelize migratiosn
- `yarn make:seedings` : populate database
- `yarn undo:seedings`: undo seedeings
- `yarn prepare:husky` - prepare husky hooks

## Inspirations
- [hagopj13/node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate)
- [danielfsouse/express-rest-boilerplate](https://github.com/danielfsousa/express-rest-boilerplate)
- [vassalloandrea/better-logs-for-exrpess](https://dev.to/vassalloandrea/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-516n)
- [mert-turkmenoglu/dependency-injection-in-typescript](https://levelup.gitconnected.com/dependency-injection-in-typescript-2f66912d143c)
- [sequelize-migrations](https://sequelize.org/master/manual/migrations.html)
## License
[MIT](LICENSE.md)