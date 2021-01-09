const path = require('path');


module.exports = {
  entry: './client/src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/public')
  },
  module: {
    rules: [{
      test: /\.css$/i,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    },
    {
      test: /\.jsx?$/,
      include: path.resolve(__dirname, './client'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },

    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        name: path.resolve(__dirname, './client'),
      },
    }]
  }
};

