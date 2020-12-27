const {resolve} = require('path')

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: './src/index.js',
  output: {
    // filename: 'y24-utils.js',
    filename: 'y24-utils.min.js',
    path: resolve(__dirname,'dist'),
    library: 'yUtils',
    libraryTarget: 'umd'
  }

}