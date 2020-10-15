module.exports = {
  publicPath: "./",
  outputDir: "wwwroot",
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  devServer: {
    port: 8010
  }
}