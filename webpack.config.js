const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "development",
    plugins: [ new MiniCssExtractPlugin() ],
    module: {
        rules: [{
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                    ]
                }
            }
        }, {
            test: /.s?css$/,
            use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ],
        }, {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({ test: /\.scss$/i }),
            new TerserPlugin({ test: /\.js(\?.*)?$/i })
        ],
    }
};
