const path = require('path');
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: path.resolve(__dirname, "src/styles/res/_index.scss")
            },
        },
    ],
    webpack: {
        alias: {
            '~': path.resolve(__dirname, 'src/')
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                '^~(.*)$': '<rootDir>/src$1'
            }
        }
    }
}