const webpack = require('webpack');
const path = require('path');
const pkg = require('../package.json');
const _ = require('lodash');

module.exports = {
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].dll.js',
		library: '[name]_library',
	},
	entry: {
		'lib': _.filter(_.keys(pkg.dependencies), (dependency) => {
			return !_.includes('@types', dependency);
		}),
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, '../dist', 'manifest.json'),
			name: '[name]_library',
			context: __dirname,
		}),
	],
};