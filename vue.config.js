const NODE_ENV = 'development' // 开发环境 打包doc
// const NODE_ENV = 'lib' // 组件库 上传npm

const baseConfig = {

}

const devConfig = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },

  publicPath: './',
  outputDir: 'docs',
  ...baseConfig
}

const buildConfig = {
  configureWebpack: {
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
  },
  outputDir: 'lib',
  productionSourceMap: false,
  ...baseConfig
}

module.exports = NODE_ENV === 'development' ? devConfig : buildConfig;