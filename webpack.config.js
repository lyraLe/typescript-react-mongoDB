let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: bundle.js
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: { // 404时重定向的地址
      index: './index.html' // 打包后的index.html文件
    }
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'node_modules'),
      "@": path.resolve(__dirname)
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }, {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      }, {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.jpe?g|png|gif|svg$/,
        loader: 'url-loader'
      }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}