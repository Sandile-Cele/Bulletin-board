const http = require('http');
const app = require('./backend/app');

const port = (process.env.PORT || "3000");

const server = http.createServer(app);
app.set('port', port);

server.listen(port);
