const http = require('http')
const {join} = require('path')
const {port, publicPath, index} = require('./config')
const fs = require('fs')
const {parse} = require('url')

http.createServer ((req, res) => {
  const url = parse(req.url)
  const path = join(publicPath, url.pathname === '/' ? `/${index}` : url.pathname)
  fs.stat(path, (error, stat) => {
    if(error) {
      if ('ENOENT' === error.code) {
        res.statusCode = 404
        res.end('Not Found')
      } else {
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    } else {
      res.setHeader('Content-Length', stat.size)
      const stream = fs.createReadStream(path)
      stream.pipe(res)
      stream.on('error', err => {
        res.statusCode = 500
        res.end('Internal Server Error')
      })
    }
  })
})
  .listen(port, () => {
    console.log(`server running at port: ${port}`);
  })