// 开发配置
module.exports = {
  output: {
    // 出口文件
    // 修改输出文件的文件名
    // filename: '[name].[contenthash].js', // [name]表根据入口名称生成名字,[]里可替换的模板字符串
    filename: 'scripts/[name].js', // 将js文件放到一个文件夹scripts里
  },
  mode: 'development',
  devtool: 'inline-source-map', // source-map,精准定位代码行数

  devServer: {
    static: './dist',
  },
}
