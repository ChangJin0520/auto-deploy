const shell = require('shelljs');

const runScript = (appName) => {
    shell.exec('whoami');

    /** 到主目录下 */
    shell.exec(`cd /root/${appName}`);

    /** 进入 appName 项目中 */
    // shell.exec(`cd ${appName}`);

    /** git 拉去代码 */
    shell.exec('git pull');

    /** 停止原来的服务 */
    shell.exec('node app.js')

    /** 启用服务 */
}

module.exports = {
    runScript
};