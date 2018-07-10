const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'random-key'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'docs')
	},
	mode: 'development',
	devServer: {
		contentBase: './docs',
		host: '0.0.0.0'
	}
};

