'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Resolve the path to the directory containing the source code.
const sourcePath = path.resolve(__dirname, 'src/www');

// Resolve the path to the directory containing the files for  distribution
const distPath = path.resolve(__dirname, 'dist');


module.exports = {
  mode: 'development',
  entry: {
    app: path.join(sourcePath, 'index.js'),
    print: path.join(sourcePath, 'print.js')
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html')
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
