// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == 'production';

const targetFolder = 'build/';
const cssTargetFolder = 'css/';
const jsTargetFolder = 'js/';
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: {
        js: {
            import: './src/js/index.js',
            filename: jsTargetFolder + 'main.js'

        },
        grid: {
            import: './src/scss/grid.scss',
        },
        style: {
            import: './src/scss/index.scss',
        },
    },
    output: {
        path: path.resolve(__dirname, targetFolder ),
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: cssTargetFolder +'[name].css'
        }),
        new RemoveEmptyScriptsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
