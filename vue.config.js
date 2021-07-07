const path = require('path')

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    runtimeCompiler: false,
    productionSourceMap: false,
    integrity: false,
    configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') config.mode = 'production';
      else config.mode = 'development'       
    },
    css: {
      extract: true,
      sourceMap: false,
      loaderOptions: {
        less: {
          modifyVars: {
            '@primary-color': '#DCB5FF',
            '@link-color': '#9393FF',
            'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      },
      modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {
      iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
      }
    },
    devServer: {
      hot: true,
      open: false,
      host: 'localhost',
      //port: 8080,
      https: false,
      hotOnly: false
    }
}
