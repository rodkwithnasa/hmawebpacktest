const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    module: {
    rules: [
      {
        test: /\.html$/,
        type: 'asset/resource',
        generator: {
          // Emits the file as 'index.html' in the dist root
          filename: '[name][ext]',
		  emit: true,
        },
      },
      {
        test: /\.css$/,
        type: 'asset/resource',
		sideEffects: true,
        generator: {
          // Moves files to 'dist/css/style.css' (or whatever they were named)
          filename: 'css/[name][ext]',
		  emit: true,
        },
      },
    ],
  },

};