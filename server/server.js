const {readFileSync} = require('fs')
const https = require('https')

const app = require("./app");

let server = app

const key = process.env.key || readFileSync('./selfsigned.key')
const cert = process.env.cert || readFileSync('./selfsigned.crt')
const ssl = key && cert
if (ssl) {
  server = https.createServer({key, cert}, app); // https://stackoverflow.com/questions/11744975/enabling-https-on-express-js
}

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

server.listen(PORT, (...args) => {
  console.log(`Server listening on port ${ssl ? 'https' : 'http'}://localhost:${PORT}`, server.connection);
});
