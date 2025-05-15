const path = require('path');
const umdConfig = require('./webpack.umd.babel');

module.exports = {
  ...umdConfig,
  entry: {
    'react-bootstrap-table2-editor': path.resolve(__dirname, '../packages/react-bootstrap-table2-editor/index.js'),
    'react-bootstrap-table2-editor.min': path.resolve(__dirname, '../packages/react-bootstrap-table2-editor/index.js')
  },
  context: path.resolve(__dirname, '../'),
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
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.json']
  }
};