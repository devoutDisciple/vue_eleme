const path = require('path');
const webpack = require('webpack');
const config = require('../config/config');
const webpackBaseConfig = require('./webpack.base.config');

const generateDll = require('../util/generateDll');



generateDll();

let baseConfig = webpackBaseConfig('development');

let devPlugins = [
	new webpack.DllReferencePlugin({
		context: __dirname,
		// name: '[name]_library',
		manifest: require('../dist/manifest.json'),
	}),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': 'development',
		'process.env.DEBUG': JSON.stringify(process.env.DEBUG) || JSON.stringify('debug')
	}),
	// new BundleAnalyzerPlugin({ analyzerPort: 8188 }),
	new webpack.NoEmitOnErrorsPlugin(), //允许js出错不中断服务
	new webpack.HotModuleReplacementPlugin(), // 热更新
];

let devConfig = {
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		port: config.dev.port,
		open: true,
		historyApiFallback: true,
		proxy: {
			'/v1': {
				target: 'http://localhost:3001',
				changeOrigin: true,
				pathRewrite: {
					'^/v1': '/v1'
				}
			}
		}
	},
	devtool: 'inline-source-map',
};

devConfig = Object.assign(baseConfig, devConfig);

devConfig.plugins = devConfig.plugins.concat(devPlugins);

module.exports = devConfig;
