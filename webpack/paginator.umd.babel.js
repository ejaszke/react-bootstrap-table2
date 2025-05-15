const path = require('path');
const umdBase = require('./webpack.umd.babel.js');

module.exports = {
  ...umdBase,
  entry: {
    'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator': './packages/react-bootstrap-table2-paginator/index.js',
    'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min': './packages/react-bootstrap-table2-paginator/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../packages/react-bootstrap-table2-paginator/dist'),
    filename: '[name].js',
    library: {
      name: 'ReactBootstrapTable2Paginator',
      type: 'umd'
    },
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true
  }
};
