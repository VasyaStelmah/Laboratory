const path = require('path');
const nodeExternals = require('webpack-node-externals');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev
module.exports = {
  entry: {
    server: path.resolve(__dirname, '../server/server.js'),
  },
  mode: isProd,
  devServer: {
    port: 5000,
    hot: isDev,
    client: {
      overlay: true,
      progress: true,
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
}