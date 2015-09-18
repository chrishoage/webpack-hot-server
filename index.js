var express = require('express')

module.exports = function WebpackHotServer(compiler, options) {
  var app = express()

  app.use(require('webpack-dev-middleware')(compiler, options))

  if (options.hot) {
    app.use(require('webpack-hot-middleware')(compiler))
  }

  if (options.proxy) {
    var proxy = require('express-http-proxy')
    Object.keys(options.proxy).map(function (path) {
      app.use(path, proxy(options.proxy[path], {
        forwardPath: function(req, res) {
          return require('url').parse(req.url).path
        }
      }))
    })
  }

  app.use(express.static(options.contentBase))

  return app

}
