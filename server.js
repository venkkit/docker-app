const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Docker container  to nikki for the 1st test🚀\n');
}).listen(PORT);

console.log(`Server running on port ${PORT}`);
