# Sprout ES2015 Starter Template

This is [carrot](http://carrot.is)'s starter template for node projects written with ES2015. It uses babel to compile ES2015 and Mocha/Chai for the tests. Everything runs through normal `node` commands in development, and it includes a makefile which will compile code before production so that babel is not used.

### Installation

- `npm i sprout-cli -g`
- `sprout add es2015 https://github.com/carrot/sprout-es2015.git`

### Usage

`sprout init es2015 <project name>`

Once you have initialized the project, you can run it with `npm start`, run tests with `npm test`, and lint with `npm run lint`.

### Options

- **name** (name of the project)
- **description** (a short description of the project)
- **github_username** (your github username)
- **travis** (boolean, use travis or not)
