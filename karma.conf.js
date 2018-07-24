// Karma configuration
// Generated on Tue Jul 24 2018 16:04:01 GMT+0800 (中国标准时间)
// var webpack = require('webpack');
// var webpackConfig = require('./node_modules/@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    plugins: ['karma-chrome-launcher', 'karma-mocha'],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'tests/unit_karma/**/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/unit_karma/**/*.spec.js': ['babel']
    },


    webpack: {
      resolve: {
        root: __dirname + "/src"
      },
      module: {
        loaders: [{
          test: /\.vue$/,
          exclude: [/node_modules/, __dirname + "xxx/xxx/lib"],
          loader: "babel-loader",
          query: {
            compact: false,
            presets: ["es2015"],
            plugins: ["es6-promise"]
          }
        }]
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
