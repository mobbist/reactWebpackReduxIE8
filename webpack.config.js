
//经测试 支持 360的IE8文档模式(Win10环境)
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var es3ifyPlugin = require("es3ify-webpack-plugin"); 
module.exports = {
  entry: {
    index:"./src/js/index.entry.js",
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env',"es2015","react"]
          }
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader']
        })
      }
    ]
  },
  devServer:{
    contentBase:"./build",
    port:3002
  },
  devtool:"source-map",
  plugins:[
    new CleanWebpackPlugin(['dist']),
    //new es3ifyPlugin(),
    new ExtractTextPlugin("./build/css/[name].css", { allChunks: true }),
    new HtmlWebpackPlugin({
      filename:"../index.html",
      template:"./src/index.html",
      inject:"body",
      chunks:["index"]
    }),
    
  ]
};