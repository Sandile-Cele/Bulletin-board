const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("https");
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer(
  {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
  },
  app.set("port", port, debug)
);

server.listen(port);
