const base = require("./webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        index: './src/main/main.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'aidPage',
            template: 'example.html'
        })
    ],
});