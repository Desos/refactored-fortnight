const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './src/'),
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: './bin/',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true
  },

  devtool: 'inline-source-map'
}