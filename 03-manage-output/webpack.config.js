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
  mode: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      // 构造函数需要new一下
      template: './index.html',
      filename: 'app.html',
      inject: 'body', // dist中生成的html文件，在body标签中生成script标签
    }),
  ],
}
