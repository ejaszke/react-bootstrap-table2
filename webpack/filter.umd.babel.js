import path from 'path';
import umdConfig from './webpack.umd.babel';

export default {
  ...umdConfig,
  entry: {
    'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter': './packages/react-bootstrap-table2-filter/index.js',
    'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min': './packages/react-bootstrap-table2-filter/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../packages/react-bootstrap-table2-filter/dist'),
    filename: '[name].js',
    library: {
      name: 'ReactBootstrapTable2Filter',
      type: 'umd'
    },
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true
  }
};
