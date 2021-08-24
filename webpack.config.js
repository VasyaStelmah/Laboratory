const { merge } = require('webpack-merge')
const commonConfig = require('./webpack/webpack.config.common.js');
module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack/webpack.config.${env}.js`);
  const config = merge(commonConfig, envConfig);
  console.log(config);
  return config
}