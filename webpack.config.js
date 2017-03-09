var path = require("path");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, "build/js"),
    publicPath: '/build',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: './',
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react','stage-2']
          }
        }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
}
