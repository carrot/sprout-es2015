# Sprout ES6 Starter Template

This is [carrot](http://carrot.is)'s starter template for node projects written with ES6. It uses babel to compile ES6 and Mocha/Chai for the tests. Everything runs through normal `node` commands in development, and it includes a makefile which will compile code before production so that babel is not used.

### Installation

- `npm i sprout -g`
- `sprout add es6 https://github.com/carrot/sprout-es6.git`

### Usage

`sprout init es6 <project name>`

Once you have initialized the project, you can run it with `npm start` and run tests with `npm test`.

### Options

- **name** (name of the project)
- **description** (a short description of the project)
- **github_username** (your github username)
- **travis** (boolean, use travis or not)