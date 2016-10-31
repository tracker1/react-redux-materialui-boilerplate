# Project Structure

* _documentation - Learning materials and project
  documentation.  All documentation should be in markdown format.
* scripts - Scripts for the purpose of running, building, and
  testing the project.
* src - source code (and tests) for the project.
  * client - react based client code including state management
    actions and reducers.  Client code is using a feature oriented
    directory structure.
    * common - common client libraries, generation and components
      * layout - common layout componts (page, navigation, etc)
      * store - generator for the redux store
      * style - reset and main styling (other components will have their own)
  * server - express server codebase
    * api - all api actions for interacting with the client to backend
      systems.
    * page - route handling based on client's routing scheme
  * shared - shared libraries and components that may be used on the
    client or the server.
* webpack - client build configuration(s)
* .babelrc - babel configuration (for node only, dev, test, build)
* .vscode/* - editor configuration
* .editorconfig - common editor configuration
* .eslintrc - linting configuration based on airbnb style rules
* .gitignore - standard node git ignore file (won't be checked in to git)
* LICENSE.txt - project license (MIT)
* package.json - project configuration for npm as well as run scripts for test,
  build and running the codebase/

## Scripts

Scripts should be executed via npm scripts that are registered in package.json

The `./scripts/` directory may contain additional scripts that do not easily fit
inside the `package.json` file.  This scripts may utilize libraries from the
`gulp` ecosystem, but will not use the gulp task runner or command-line
interface.
