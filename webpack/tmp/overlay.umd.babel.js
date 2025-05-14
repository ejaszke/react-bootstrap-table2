import path from 'path';
import umdConfig from '../webpack.umd.babel.js';

export default {
  ...umdConfig,
  entry: {
    'react-bootstrap-table2-overlay/dist/react-bootstrap-table2-overlay': './packages/react-bootstrap-table2-overlay/index.js',
    'react-bootstrap-table2-overlay/dist/react-bootstrap-table2-overlay.min': './packages/react-bootstrap-table2-overlay/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../packages'),
    filename: '[name].js',
    library: {
      name: 'ReactBootstrapTable2Overlay',
      type: 'umd'
    },
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true
  }
};
