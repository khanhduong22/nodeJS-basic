var http = require('http')

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(
      `Hello World\n ${Object.keys(req).map((key) => `${key}\n`)} ${
        http.STATUS_CODES[200]
      }`
    )
  })
  .listen(1995, '127.0.0.1')
