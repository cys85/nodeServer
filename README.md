# 轻量级node静态资源服务器

## 启动

```bash
$ npm run start
```

## 配置

config.js

```js
{
  port: 8000, // 端口
  publicPath: path.join(__dirname, 'public'), // 静态资源目录
  index: 'index.html' // 资源的index文件
}
```