const http = require("http");
const crypto = require("crypto");

const randomString = crypto.randomBytes(16).toString("hex");

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${randomString}`);
}, 5000);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<html><body><p>${randomString}</p></body></html>`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
