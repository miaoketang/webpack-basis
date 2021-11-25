const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入文件大写，一般代表为类或构造函数
module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    // 出口文件
    filename: 'boudle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true, // 每次打包，清理dist
    assetModuleFilename: 'images/[contenthash][ext]', // 自定义资源文件目录/文件名，方法一（优先级不如modle中rules中的generator）：设置到images文件夹下，按webpack自动生成文件名的方法[contenthash]，即文件内容的生成hash字符串
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
  module: {
    rules: [
      // 自定义资源模块引入规则
      {
        test: /\.png$/, // 定义加载的文件类型
        type: 'asset/resource', // 定义的资源类型:resource资源类型
        generator: {
          // 自定义资源文件目录/文件名，方法二（优先级比output中的assetModuleFilename高）
          filename: 'images/[contenthash][ext]',
        },
      },

      {
        test: /\.svg$/,
        type: 'asset/inline', // inline资源类型
      },

      {
        test: /\.txt$/,
        type: 'asset/source', // source资源类型
      },

      {
        test: /\.jpg$/,
        type: 'asset', // 通用资源类型
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024, // 超过该值时，才选择resource，否则为inline
          },
        },
      },
    ],
  },
}
