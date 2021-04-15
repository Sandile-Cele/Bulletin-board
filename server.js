const http = require('http');

const server = http.createServer((req, res) => {
  res.end('My server is running! \nThis is an HTTP response')
});

server.listen(process.env.PORT || 3000);

