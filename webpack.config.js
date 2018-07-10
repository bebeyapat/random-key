const path = require('path');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	devServer: {
		contentBase: './dist',
		host: '0.0.0.0'
	}
};

