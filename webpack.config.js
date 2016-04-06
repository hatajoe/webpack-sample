module.exports = {
  entry: {
    bundle: "./src/js/entry.js"
  },
  output: {
    path: './public/assets/js',
    publicPath: '/assets/js/',
    filename: "[name].js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
