// Sentry error tracker for Node.js (Express)
const express = require('express');
const Sentry = require('@sentry/node');

const app = express();

// Initialize Sentry
Sentry.init({
  dsn: 'https://<your-sentry-dsn>@o0.ingest.sentry.io/0', // Replace with your DSN
  tracesSampleRate: 1.0,
});

// Request handler must be before all routes
app.use(Sentry.Handlers.requestHandler());

app.get('/', (req, res) => {
  res.send('Hello from Sentry-enabled app');
});

app.get('/crash', (req, res) => {
  throw new Error('Simulated error for tracking');
});

// The error handler must be before any other error middleware
app.use(Sentry.Handlers.errorHandler());

// Fallback error handler
app.use((err, req, res, next) => {
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

app.listen(3000, () => {
  console.log('Sentry tracker running on http://localhost:3000');
});
