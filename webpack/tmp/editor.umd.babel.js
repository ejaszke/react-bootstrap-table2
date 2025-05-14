const path = require('path');
const umdConfig = require('../webpack.umd.babel');

module.exports = {
  ...umdConfig,

  entry: {
    'react-bootstrap-table2-editor': './packages/react-bootstrap-table2-editor/index.js',
    'react-bootstrap-table2-editor.min': './packages/react-bootstrap-table2-editor/index.js'
  },

  output: {
    path: path.resolve(__dirname, '../packages/react-bootstrap-table2-editor/dist'),
    filename: '[name].js',
    library: {
      name: 'ReactBootstrapTable2Editor',
      type: 'umd'
    },
    globalObject: 'this',
    clean: true,
    umdNamedDefine: true
  }
};
