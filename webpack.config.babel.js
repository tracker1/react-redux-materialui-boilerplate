/* eslint "import/no-extraneous-dependencies":"off", no-consle:"off" */
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';
const isDev = (ENV === 'development');

const appCSS = new ExtractTextPlugin('app.css');

module.exports = {
  entry: {
    app: (
      isDev
        ? ['webpack/hot/dev-server', 'webpack-hot-middleware/client'] 
        : []
    ).concat(
      ['babel-polyfill', './src/client/index.js']
    ),
  },

  output: {
    path: path.resolve(__dirname, './dist/public/'),
    publicPath: '/public',
    filename: '[name].js',
    // library: ['[name]'],
    // libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    // modulesDirectories: [
      // `${__dirname}/src/lib`,
      // `${__dirname}/node_modules`,
      // 'node_modules',
    // ],
    alias: Object.assign(
      {
        /* BOTH */
        // components: `${__dirname}/_src/components`,    // used for tests
        // style: `${__dirname}/_src/style`,
        // lib: `${__dirname}/_src/lib`,
        // shared: `${__dirname}/_src/shared`
      },
      isDev ? {
        /* DEV */
      } : {
        /* PROD */
        react: 'preact-compat',
        'react-dom': 'preact-compat',
      }
    ), 
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /src\//,
        loader: 'source-map-loader',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy'],
          sourceMaps: true,
          retainLines: true,
          cacheDirectory: true,
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        loader: appCSS.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap'),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(xml|html|txt)$/,
        loader: 'raw',
      },
      {
        test: /\.(svg|woff|ttf|eot)(\?.*)?$/i,
        loader: 'file-loader?name=assets/fonts/[name]_[hash:base64:5].[ext]',
      },
      {
        test: /\.(gif|jpg|png)(\?.*)?$/i,
        loader: 'file-loader?name=assets/images/[name]_[hash:base64:5].[ext]',
      },
    ],
  },

  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './src/client/common/style'),
      path.resolve(__dirname, './node_modules'),
    ],
  },

  postcss: () => [
    autoprefixer({ browsers: 'last 2 versions' }),
  ],

  plugins: ([
    appCSS,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/client/index.template.html'),
      inject: 'body',
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
    new webpack.ProvidePlugin({
      React: isDev ? 'react' : 'preact-compat',
      ReactDOM: isDev ? 'react-dom' : 'preact-compat',
      Promise: 'bluebird',
    }),
  ]).concat(
    ENV === 'production'
    ? [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
          warnings: false,
        },
        comments: false,
      }),
    ]
    : [
      new webpack.HotModuleReplacementPlugin()
    ]
  ),

  stats: { colors: true },

  devtool: ENV === 'production' ? 'source-map' : 'inline-source-map',

  devServer: {
    noInfo: true,
    hot: true,
    port: process.env.PORT || 8181,
    host: '0.0.0.0',
    colors: true,
    publicPath: '/public/',
    contentBase: './src',
    historyApiFallback: true,
    proxy: [
      // OPTIONAL: proxy configuration:
      {
        path: '/api',
        target: 'http://localhost:8080/api',
        rewrite: (req) => {
          console.log('proxy', req.url);
          // strip first path segment
          // req.url = req.url.replace(/^\/[^\/]+\//, '');
        },
      },
    ],
  },
};
