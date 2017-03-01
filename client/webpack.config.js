const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
var path = require('path')

const root = `${__dirname}/src`;
const dist = `${__dirname}/dist`;
const paths = {
  app: `${root}/app/root.module.js`,
  styles: `${root}/styles`,
  static: {
    index: `${root}/index.html`,
    manifest: `${root}/manifest.json`,
    images: `${root}/img/**/*`
  },
};

// Plugins
const prep = {
  clean: new cleanPlugin([
    dist,
  ]),
  copy: new copyPlugin([{
    from: paths.static.index,
  }, {
    from: paths.static.manifest,
  }, {
    from: paths.static.images,
    to: 'img/',
    flatten: true,
  }]),
};

// Loaders
const scriptsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: [{
      loader: 'ng-annotate-loader',
    },{
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ],
};

const markupLoader = {
  test: /\.html$/,
  loader: 'ngtemplate-loader!html-loader',
};

const fontsLoader = {
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader?name=fonts/[name].[ext]',
};

const extractSass = new extractPlugin({
    filename: "css/styles.css",
    disable: process.env.NODE_ENV === "development"
});

const stylesLoader = {
  test: /\.scss$/,
  loader: extractSass.extract({
    loader: [{
      loader: "css-loader"
    }, {
      loader: "sass-loader",
      options: {
        data: '@import "variables";',
        includePaths: [paths.styles, root]
      }
    }],
    // use style-loader in development
    fallbackLoader: "style-loader"
  })
};

// Config object
const config = {
  entry: {
    bundle: paths.app,
  },
  devtool: '#eval-source-map',
  module: {
    rules: [
      scriptsLoader,
      markupLoader,
      fontsLoader,
      stylesLoader
    ],
  },
  plugins: [
    prep.clean,
    prep.copy,
    extractSass
  ],
  
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/app.[name].js',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    host: '0.0.0.0'
  },
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


