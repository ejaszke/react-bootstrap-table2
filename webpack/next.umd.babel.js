import path from 'path';
import umdConfig from './webpack.umd.babel.js';

export default {
  ...umdConfig,

  entry: {
    'react-bootstrap-table-next': './packages/react-bootstrap-table2/index.js',
    'react-bootstrap-table-next.min': './packages/react-bootstrap-table2/index.js'
  },

  output: {
    path: path.resolve(__dirname, '../packages/react-bootstrap-table2/dist'),
    filename: '[name].js',
    library: {
      name: 'ReactBootstrapTable2',
      type: 'umd'
    },
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true
  }
};
