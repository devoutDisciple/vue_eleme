const path = require('path');
const webpack = require('webpack');
const config = require('../config/config');
const webpackBaseConfig = require('./webpack.config.base');

const generateDll = require('../util/generateDll');

//获取npm后面的命令
// const commandTarget = process.env.npm_lifecycle_event; // npm run start:build 获取的是start:build


generateDll();

let baseConfig = webpackBaseConfig('development');

let devPlugins = [
	new webpack.DllReferencePlugin({
		context: path.resolve(__dirname, '../'),
		// name: '[name]_library',
		manifest: require('../dist/manifest.json'),
	}),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development'), // 一定要用json.stringify，如果是单引号的'development',不正确，是定义不了process.env.NODE_ENV的
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
