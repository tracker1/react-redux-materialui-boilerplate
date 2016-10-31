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
  * material-ui - React application components
  * react-icons - Normalized SVG based icon library
  * react-flexbox-grid - layout control based on flexbox

* Redux - State Management
  * redux - unidirectional state management library
  * redux-react - tooling for tying redux into react for easier usage
  * redux-thunks - tooling for asynchronouse action creators with redux
  * redux-react-router - tooling to synchronize react-router for use with redux

* Testing
  * nyc - cli for istanbul, used for code coverage metrics
    * https://github.com/gotwarlost/istanbul/issues/617
  * tap - test anything protocol (NOTE: IN FLUX, may switch to mocha+chai)
    * tape - test tooling for tap
