var webpack = require('webpack');

module.exports = {
  entry: './client/main.js',
  output: {
    path: './client',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 8000,
    hot: true,
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }
  ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()  
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};