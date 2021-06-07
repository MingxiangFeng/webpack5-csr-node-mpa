'use strict';

const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]/[name].[chunkhash].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', { loader: 'css-loader', options: { sourceMap: true } }, 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', { loader: 'css-loader', options: { sourceMap: true } }, 'postcss-loader', { loader: 'sass-loader', options: { sourceMap: true } },]
      },
      {
        test: /\.html$/i,
        loader: 'raw-loader'
      },
    ],  
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      handler(percentage, message, ...args) {
        // e.g. Output each progress message directly to the console:
        // console.info('percentage==', percentage, 'message==', message, 'args===', ...args);
      },
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
    })      
  ],
  devtool: 'cheap-source-map'
})

module.exports = devWebpackConfig
