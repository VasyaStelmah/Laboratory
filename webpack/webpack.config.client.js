const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

__webpack_base_uri__ = 'http://localhost:8080/';

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    },
  }
  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin(),
    ]
  }
  return config
}

module.exports = {
  entry: ['@babel/polyfill', '/src/index.tsx'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    port: 3000,
    hot: isDev,
    client: {
      overlay: true,
      progress: true,
    },
  },
  devtool: isDev ? 'source-map' : false,
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader', 'sass-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        ]
      },
    ]
  }
}