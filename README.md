#Webpack Hot Server

##Usage

```
var WebpackServer = require('webpack-hot-server');

new WebpackServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  contentBase: './',
  hot: true,
  stats: true
}).listen(3000, 'localhost', (err) => {
  if (err) throw new gutil.PluginError('webpack', err)
  console.log('[webpack-server]', 'listening on localhost:3000')
})

```
