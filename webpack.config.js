const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [ 
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(jpg|png|svg|jpeg)$/, use: 'url-loader?limit=150000&name[hash:8]-[name]-[ext]'},
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, // 处理字体文件
      { test: /\.js$/, use:'babel-loader', exclude: /node_modules/},
      { test: /\.vue$/, use: ['vue-loader']}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js', // 设置vue被导入时包的路径
    }
  }
}

