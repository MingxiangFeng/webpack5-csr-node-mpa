const { resolve } = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')

const isPro = process.env.NODE_ENV === 'production'

const app = new express()

const serve = (path, cache) => express.static(resolve(__dirname ,path), {
  maxAge: 0//cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(history({
  verbose: true,
  htmlAcceptHeaders: ['text/html'],
  disableDotRule: true,
  rewrites: [
    { 
      from: /^\/\w+(\/)?.*/, 
      to: function(context) {
        const path = require('path')
        const pathname = context.parsedUrl.pathname
        const match = pathname.split('/')
        const assetsPublicPath = '/' + (match && match[1]) + '/'
        return path.posix.join(assetsPublicPath, 'index.html')
      }
    },
    {
      from: /^(\/)?$/,
      to:  '/index/'
    }
  ]
}))

if(isPro) {
  app.use(serve('./dist'));
} else {
  const webpack = require("webpack");
  const middleware = require("webpack-dev-middleware");
  const config = require('./build/webpack.server.conf')
  for (const key in config.entry) {
    const item = config.entry[key]
    // 官方包
    // item.unshift('webpack-hot-middleware/client')
    // 民间优化包
    item.unshift('./build/webpack-hot-middleware/client')
  }
  const compiler = webpack(config);
  app.use(middleware(compiler, { publicPath: config.output.publicPath }))
  app.use(require("webpack-hot-middleware")(compiler, {
    overlay: true
  }));
}


app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
