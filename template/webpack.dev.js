/**
 * Created by chowchikwan on 2018/9/18.
 */
const webpackMerge = require('webpack-merge');
const portfinder = require('portfinder');

const serverConfig = require('./webpack.server.js');

module.exports = portfinder
  .getPortPromise({
    port: 8080,
  })
  .then(port => webpackMerge(serverConfig, {
    devServer: {
      port,
    },
  }));
