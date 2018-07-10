const path = require('path');

module.exports = {
	entry: {
		app: './src/index.js'
	},
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

