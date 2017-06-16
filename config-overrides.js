function rewire(config, env) {
  const babelOptions = config.module.rules.find(conf => {
    return conf.loader && conf.loader.includes('babel-loader')
  }).options
  const babelrc = require(babelOptions.presets[0])
  babelrc.plugins = [
    ['module-resolver', { root: ['src'] }],
    'lodash',
    'babel-plugin-idx',
    'styled-jsx-postcss/babel',
    // 'flow-react-proptypes',
    'tcomb',
  ].concat(babelrc.plugins || [])
  console.log(babelrc.plugins)
  babelOptions.presets = babelrc
  return config
}

module.exports = rewire
