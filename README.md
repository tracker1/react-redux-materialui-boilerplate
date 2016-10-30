This project is a proof of concept using the following technologies..

## Modules and Tools

This project will be built with ES2016-style modules.  NPM will be used to execute
all scripts.

* Webpack - Bundler
  * Webpack is for bunlding the client-side code for optimal browser deployments, it will include outputs for css and javascript

* Babel - ES2017+ Transpiler
  * Babel is used so that modern features can be used today in browsers without said features and those features not in node.

* React - UI Framework
  * react - a UI Framework that will be used for all components.
  * react-router - tooling for handling routing as a higher order component

* Redux - State Management
  * redux - unidirectional state management library
  * redux-react - tooling for tying redux into react for easier usage
  * redux-thunks - tooling for asynchronouse action creators with redux
  * redux-react-router - tooling to synchronize react-router for use with redux

* tape - testing framework
  * https://github.com/gotwarlost/istanbul/issues/617
  * istanbul - code coverage
  * nyc - cli for istanbul

## Scripts

Scripts should be executed via npm scripts that are registered in package.json

The `./scripts/` directory may contain additional scripts that do not easily fit
inside the `package.json` file.  This scripts may utilize libraries from the
`gulp` ecosystem, but will not use the gulp task runner or command-line
interface.