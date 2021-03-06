/* eslint-disable no-unused-vars */
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const pagesObj = {}

const chromeName = [
  'fiveToken',
  'welcome',
  'create-wallet',
  'create-words',
  'check-words',
  'wallet',
  'send-fil',
  'setting',
  'setting-address',
  'setting-backups',
  'setting-about',
  'lock-user',
  'fiveToken-connect',
  'setting-networks',
  'import-words',
  'import-privatekey',
  'account',
  'message-detail',
  'add-token',
  'content-script',
  'background',
  'popup'
]

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/pages/${name}/index.js`,
    template: 'public/index.html',
    filename: `pages/${name}.html`
  }
})

const plugins = [
  {
    from: path.resolve('src/manifest.production.json'),
    to: `${path.resolve('dist')}/manifest.json`
  },
  {
    from: path.resolve('src/assets/image'),
    to: `${path.resolve('dist')}/assets/image`
  }
]

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: pagesObj,
  productionSourceMap: true,
  // chainWebpack: config => {
  //   config.resolve.alias.set('@', resolve('src')),
  //   config.optimization.minimize(true)
  //   config.optimization.splitChunks({
  //     chunks: 'async',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 6,
  //     maxInitialRequests: 4,
  //     automaticNameDelimiter: '~',
  //     cacheGroups: {
  //         vendors: {
  //             name: `chunk-vendors`,
  //             test: /[\\/]node_modules[\\/]/,
  //             priority: -10,
  //             chunks: 'initial'
  //         },
  //         common: {
  //             name: `chunk-common`,
  //             minChunks: 2,
  //             priority: -20,
  //             chunks: 'initial',
  //             reuseExistingChunk: true
  //         }
  //     }
  //   })
  // },
  configureWebpack: {
    plugins: [
      CopyWebpackPlugin(plugins)
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     compress: {
      //         drop_console: true
      //     }
      //   }
      // })
    ]
  }
}
