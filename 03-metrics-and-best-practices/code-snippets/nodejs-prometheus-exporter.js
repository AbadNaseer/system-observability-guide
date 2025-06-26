const http = require('http');
const client = require('prom-client');

// Enable default metrics
client.collectDefaultMetrics();

// Custom counter
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'statusCode']
});

// Create server
const server = http.createServer((req, res) => {
  const method = req.method;
  const statusCode = 200;

  httpRequestCounter.inc({ method, statusCode });

  res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
  res.end('Hello, Prometheus!');
});

// Metrics endpoint
http.createServer(async (req, res) => {
  if (req.url === '/metrics') {
    res.writeHead(200, { 'Content-Type': client.register.contentType });
    res.end(await client.register.metrics());
  }
}).listen(9100);

server.listen(3000, () => {
  console.log('App running on http://localhost:3000');
  console.log('Metrics exposed on http://localhost:9100/metrics');
});
