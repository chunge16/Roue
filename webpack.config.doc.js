const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        ...base.entry ,
        index: './example.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'pub'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'卡',
            template: 'src/main/index.html'
        })
    ],
})