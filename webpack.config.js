const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: ['react-hot-loader','babel-loader'], exclude: /node_modules/}
        ]
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['*', '.js']
    },
    plugins: [
        HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()
    ]
};