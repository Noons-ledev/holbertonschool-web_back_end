const http = require('http');

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
