const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config/config');
const webpackBaseConfig = require('./webpack.base.config');
const chalk = require('chalk');

const generateDll = require(path.resolve(__dirname, '../config/generateDll.js'));

//获取npm后面的命令
const commandTarget = process.env.npm_lifecycle_event; // npm run start:build 获取的是start:build

let API_SERVER = 'http://localhost:3306';
if(_.includes(commandTarget, 'dev')) API_SERVER = 'http://www.baidu.com';
else API_SERVER = 'http://www.alibaba-inc.com';


generateDll();

console.log(chalk.yellow(`server is running at ${API_SERVER}`));

console.log(chalk.yellow('webpack log: enviorment is development'));

module.exports = merge(webpackBaseConfig('development'), {
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		port: config.dev.port,
		historyApiFallback: true,
		proxy: {
			'/v1': {
				target: 'http://localhost:3001',
				pathRewrite: {
					'^/v1': '/v1'
				},
				changeOrigin: true,
			}
		}
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			// name: '[name]_library',
			manifest: require('../dist/manifest.json'),
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': 'development',
			'process.env.DEBUG': JSON.stringify(process.env.DEBUG) || JSON.stringify('debug'),
			'API_SERVER': API_SERVER
		}),
		// new BundleAnalyzerPlugin({ analyzerPort: 8188 }),
		new webpack.NoEmitOnErrorsPlugin(), //允许js出错不中断服务
		new webpack.HotModuleReplacementPlugin(), // 热更新
	],
	devtool: 'inline-source-map',
});