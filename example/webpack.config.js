const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './example/index.tsx',
	output: {
		path: path.join(__dirname, './example/dist'),
		filename: 'index.js'
	},
	devServer: {
		port: 3000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: true
					}
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './example/index.html',
			inject: true
		})
	],
	resolve: { extensions: [".tsx", ".ts", ".js", ".jsx" ] },
}