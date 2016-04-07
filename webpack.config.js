var sprite = require('sprite-webpack-plugin');

var path = {
  src: "./src",
  dest: "./public/assets" 
};

module.exports = {
  entry: {
    index: path.src + "/js/index.js",
    campaign1: path.src + "/js/campaign1.js",
    campaign2: path.src + "/js/campaign2.js"
  },
  output: {
    path: path.dest + '/js',
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=../img/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.html', '.png']
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new sprite({
      'source' : path.src + '/img/sprite/',
      'imgPath': path.dest + '/img/',
      'cssPath': path.src + '/css/'
    })
  ]
};
