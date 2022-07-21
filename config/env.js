// 文件用于管理启动环境
const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  isDevelopment,
  isProduction,
}