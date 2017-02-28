const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');

const root = `${__dirname}/src`;
const dist = `${__dirname}/dist`;
const paths = {
  app: `${root}/app/root.module.js`,
  styles: `${root}/styles`,
  static: {
    index: `${root}/index.html`,
    manifest: `${root}/manifest.json`,
    images: `${root}/img/**/*`,
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
  loaders: [
    'ng-annotate-loader',
    'babel-loader',
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
  devtool: 'source-map',
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
    path: `${dist}/`,
    publicPath: '/',
    filename: 'js/app.[name].js',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};

module.exports = config;
