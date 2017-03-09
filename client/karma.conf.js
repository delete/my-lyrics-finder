const webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    webpack: webpackConfig,
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/app/root.module.js',
      'src/app/**/*.spec.js',
    ],
    exclude: [
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter'),
      require('karma-webpack'),
    ],
    preprocessors: {
      'src/app/root.module.js': ['webpack'],
      'src/app/**/*.js': ['webpack'],
      'src/app/**/*.spec.js': ['webpack']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
