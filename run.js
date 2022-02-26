const shell = require('shelljs');

const runScript = (appName) => {
    /** 停止原来的服务 */
    shell.exec(`lsof -l -R | grep node | grep root/${appName} -m 1 | awk '{print $2}' | xargs`)
    
    /** 到主目录下 */
    shell.exec(`cd /root/${appName} && git pull && node app.js`, { async:true });

    /** 进入 appName 项目中 */
    // shell.exec(`cd ${appName}`);

    /** git 拉去代码 */
    // shell.exec('git pull');

    /** 启用服务 */
}

module.exports = {
    runScript
};