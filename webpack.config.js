const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	plugins: [
		new CleanWebpackPlugin(['docs']),
		new HtmlWebpackPlugin({
			title: 'random-key'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'docs')
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './docs',
		host: '0.0.0.0'
	}
};

