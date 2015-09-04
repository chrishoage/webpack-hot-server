var express = require('express')

module.exports = function WebpackHotServer(compiler, options) {
  var app = express()

  app.use(require('webpack-dev-middleware')(compiler, options))

  if (options.hot) {
    app.use(require('webpack-hot-middleware')(compiler))
  }

  app.use(express.static(options.contentBase))

  return app

}

