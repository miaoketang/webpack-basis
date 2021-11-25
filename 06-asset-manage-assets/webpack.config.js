const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入文件大写，一般代表为类或构造函数
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩插件

// 引入自定义JSON模块
// const toml = require('toml')
// const yaml = require('yaml')

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
  // mode: 'production', // 使用压缩插件时，改为生产环境
  devtool: 'inline-source-map', // source-map,精准定位代码行数

  plugins: [
    new HtmlWebpackPlugin({
      // 构造函数需要new实例化
      template: './index.html', // 生成模板
      filename: 'app.html',
      inject: 'body', //定义生成script标签，在body标签中
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css', // 自定义资源文件目录/文件名
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

      // {
      //   test: /\.(css|less)$/,
      //   use: ['style-loader', 'css-loader', 'less-loader'], // 注意：先使用的放后面！webpack支持链式调用，且逆序。表示先使用less-loader解析为css，再传递给css-loader打包识别文件，再通过style-loader 将文件放置到页面上
      // },

      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'], // 注意：先使用的放后面！webpack支持链式调用，且逆序。表示先使用less-loader解析为css，再传递给css-loader打包识别文件，再通过style-loader 将文件放置到页面上
      },

      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },

      // {
      //   test: /\.toml$/,
      //   type: 'json',
      //   parser: {
      //     parse: toml.parse,
      //   },
      // },
      // {
      //   test: /\.yaml$/,
      //   type: 'json',
      //   parser: {
      //     parse: yaml.parse,
      //   },
      // },

      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules，不检测
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 预设合集
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  optimization: {
    // 优化配置
    minimizer: [new CssMinimizerPlugin()], //压缩插件
  },
}
