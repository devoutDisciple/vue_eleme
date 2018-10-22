const shelljs = require('shelljs');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const getRealPath = (temPath) => {
	return path.join(__dirname, temPath);
};

console.log(chalk.yellow('logging: checkout ths libary of dll is exsting ? ...'));

const genDll = () => {
	if(!fs.existsSync(getRealPath('../dist'))) {
		console.log(chalk.yellow('logging: the dir of named dist is generating...'));
		fs.mkdirSync(getRealPath('../dist'));   
	}
	if(!fs.existsSync(getRealPath('../dist/lib.dll.js'))) {
		console.log(chalk.yellow('logging: Generating dll...'));
		shelljs.exec('npm run dll');
	}
};

module.exports = genDll;