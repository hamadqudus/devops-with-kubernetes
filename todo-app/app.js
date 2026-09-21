const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<html><body><h1>Todo app</h1><p>Hello from the todo app!</p></body></html>");
    return;
  }
  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
