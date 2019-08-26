/**
 * Created by ChowChiKwan on 2019/08/26.
 */
const webpackMerge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devtool: '#inline-source-map',
});