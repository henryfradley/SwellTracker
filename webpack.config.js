const path = require('path');


module.exports = {
  entry: './client/src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/public')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, './client'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
    ]
  }
};