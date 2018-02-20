// webpack.config.js
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //entry: ['./src/index'], // file extension after index is optional for .js files
  // devtool: 'cheap-eval-source-map',
  // entry:[
  //   'webpack-dev-server/client?http://localhost:8080',
  //   'webpack/hot/dev-server',
  //   './src/index'
  // ],
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'), //result directory
    filename: 'bundle.js'
  },
  
  plugins: [
    new webpack.optimize.UglifyJsPlugin({//webpack 명령을 실행하면, UglifyJsPlugin에 의해 모든 공백을 제거하는 등의 과정을 거쳐 900KB 짜리 파일을 200KB로 줄일 수 있습니다.(코드 축소,경고메시지 생략)
      compressor: {
        warnings: false,// 경고메시지 표시 X
      },
    }),
    //html template 생성
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
  }],
    //sass일경우
    // {
    //   test: /\.scss$/,
    //   loaders: ["style", "css", "sass"]
    // }
    //브라우저에서 접근하는 파일 위치
    // devServer:{
    //     contentBase:'./dist',
    //     hot:true //hmr사용여부
    // }
  }
}
