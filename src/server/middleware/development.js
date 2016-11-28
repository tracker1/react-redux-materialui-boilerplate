/* eslint global-require:"off", import/no-extraneous-dependencies:"off" */
export default async function registerApp(app) {
  const webpack = require('webpack');
  const webpackConfig = require('../../../webpack.config.babel.js');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
