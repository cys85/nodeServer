const path = require('path')
const config = {
  port: 8000, // 端口
  publicPath: path.join(__dirname, 'public'), // 静态资源目录
  index: 'index.html' // 资源的index文件
}

module.exports = config