module.exports = {
  entry: {
    index: "./src/js/index.js",
    campaign1: "./src/js/campaign1.js",
    campaign2: "./src/js/campaign2.js"
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
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.html']
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
