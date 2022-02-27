const shell = require('shelljs');

const runScript = (appName) => {
    /** 停止原来的服务 */
    shell.exec(`lsof -l -R | grep node | grep root/${appName} -m 1 | awk '{print $2}' | xargs kill -s 9`);
    
    /** 更新服务 */
    shell.exec(`cd /root/${appName} && git pull && npm run start`, { async: true });
}

module.exports = {
    runScript
};