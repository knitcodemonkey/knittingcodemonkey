var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel', 'babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?{browsers:["last 2 version", "> 1%", "ie 8"]}',
          'sass-loader'
        ]
      },
    ]
  }
};


if('production' === process.env.NODE_ENV){
  // replace 'NODE_ENV' variable in the code with 'production'.
  // This will be use for dead code elimination in the minification step below.
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  );
  // Uglify - minify and remove comments for production
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      mangle: true,
    })
  );
}

module.exports = webpackConfig;