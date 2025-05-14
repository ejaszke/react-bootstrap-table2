const path = require('path');
const fs = require('fs');

module.exports = {
    stories: async () => {
        const glob = require('fast-glob');
        const files = await glob(['../examples/**/*.stories.{js,jsx,ts,tsx}'], { cwd: __dirname });

        // Tylko te, które mają prawidłowy Storybookowy export default z "title"
        return files.filter((file) => {
            const fullPath = path.resolve(__dirname, file);
            const content = fs.readFileSync(fullPath, 'utf-8');
            return content.includes('export default') && content.includes('title');
        });
    },

    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-console'
    ],

    staticDirs: ['../public'],

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    webpackFinal: async (config) => {

        const srcPath = path.join(__dirname, '../src');
        const examplesPath = path.join(__dirname, '../examples');
        const storyPath = path.join(__dirname, '../stories');

        config.resolve.alias = {
            ...config.resolve.alias,
            examples: examplesPath,
            stories: storyPath,
            src: srcPath,
            'components': path.join(srcPath, 'components'),
            'utils': path.join(srcPath, 'utils'),

            'react-bootstrap-table-next': path.join(__dirname, '../../react-bootstrap-table2/index.js'),
            'react-bootstrap-table2-editor': path.join(__dirname, '../../react-bootstrap-table2-editor/index.js'),
            'react-bootstrap-table2-filter': path.join(__dirname, '../../react-bootstrap-table2-filter/index.js'),
            'react-bootstrap-table2-overlay': path.join(__dirname, '../../react-bootstrap-table2-overlay/index.js'),
            'react-bootstrap-table2-paginator': path.join(__dirname, '../../react-bootstrap-table2-paginator/index.js'),
            'react-bootstrap-table2-toolkit': path.join(__dirname, '../../react-bootstrap-table2-toolkit/index.js'),
        };

        config.module.rules.push({
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        });

        config.resolve.extensions.push('.js', '.jsx');

        return config;
    }
};