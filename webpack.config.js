/**@type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  entry: './src/index.js',
  experiments: {
    css: true
  }
}
module.exports = config