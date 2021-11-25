const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入文件大写，一般代表为类或构造函数
module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    // 出口文件
    filename: 'boudle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true, // 每次打包，清理dist
  },
  mode: 'development', // 开发环境
  devtool: 'inline-source-map', // source-map,精准定位代码行数

  plugins: [
    new HtmlWebpackPlugin({
      // 构造函数需要new实例化
      template: './index.html', // 生成模板
      filename: 'app.html',
      inject: 'body', //定义生成script标签，在body标签中
    }),
  ],

  devServer: {
    static: './dist',
  },
}
