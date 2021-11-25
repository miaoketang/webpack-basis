const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // css压缩插件
const TerserPlugin = require('terser-webpack-plugin') // 压缩插件

// 生产配置
module.exports = {
  output: {
    // 出口文件
    // 修改输出文件的文件名
    // filename: '[name].[contenthash].js', // [name]表根据入口名称生成名字,[]里可替换的模板字符串
    filename: 'scripts/[name].[contenthash].js', // 将js文件放到一个文件夹scripts里

    publicPath: 'http://localhost:8083/', // 可配置任意的服务器地址或CDN地址
  },
  mode: 'production', // 生产环境

  optimization: {
    // 优化配置
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()], //压缩插件
  },
  performance: {
    // 关闭警告提示
    hints: false,
  },
}
