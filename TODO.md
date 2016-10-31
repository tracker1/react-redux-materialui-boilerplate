# TODO List

The following are the items that should be handled at the boilerplate level
for this project.

* Build
  * ~~babel config for node env~~
  * webpack configuration
    * sass-loader / css extract
    * babel-loader and related setup
      * optional modern output
  * build script for `dist/`
* Testing
  * ~~Code Coverage via nyc/istanbul~~
  * ~~coverage and test requirement~~
  * fix performance issues
    * either: run all tests from one entry point to reduce
      init overhead
    * or: switch to mocha which maintains a single entry
    * will depend on some research, mocha/chai may be better
  * write test for example component
* Structure
  * ~~initial layout~~
  * dev server runner
* Configure client
  * redux store generator
  * reducer root
  * initial common components
    * material-ui, react-icons, flexbox, etc
  * abstract for server render
* Configure server
  * helment at hpp
  * static assets
    * prod environment `__dirname + ../static`
    * dev environment, separate webpack dev server instance
      * webpack dev server init
      * spawn server in dev mode / nodemon
      * when one process terminates, both should
  * api route
    * error handler
  * page route - react/app render
    * wireup store
    * wireup router
    * handle server rendering
    * simple render initially
      * potential for electrode in future
* Environment configuration
  * want a minimal environment config for dev, test, prod runtime
  * i18n/l10n library integration
