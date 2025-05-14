const path = require('path');
const umdBase = require('../webpack.umd.babel.js');

module.exports = {
  ...umdBase,

  entry: {
    'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit': './packages/react-bootstrap-table2-toolkit/index.js',
    'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min': './packages/react-bootstrap-table2-toolkit/index.js'
  },

  output: {
    path: path.resolve(__dirname, '../packages'),
    filename: '[name].js',
    library: {
      name: 'ReactBootstrapTable2Toolkit',
      type: 'umd'
    },
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true
  },

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  }
};
