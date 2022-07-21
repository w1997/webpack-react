// 用于管理统一常量
// 首先写公共项目根路径和启动端口及IP
const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')   // 项目根路径

const SERVER_HOST = '10.40.95.119'
const SERVER_PORT = 3004

module.exports = {
  PROJECT_PATH,
  SERVER_HOST,
  SERVER_PORT,
}