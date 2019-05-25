const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', //入口
  module: {
    rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.less$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'less-loader',
			],
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
					  limit: 5000,
					  // 分离图片至imgs文件夹
					  name: "imgs/[name].[ext]",
					}
				},
			]
		},
    ]
  },
  plugins: [
  	new VueLoaderPlugin(),
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../views/index.html'),
    }),
  ]
};