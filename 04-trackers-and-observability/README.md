# 📌 Trackers in DevOps & Observability

> Part of the [System Observability Guide](../)  
> Author: Abad Naseer  
> Status: ✅ Ready

---

## 📍 What is a Tracker?

In DevOps & Observability, a **tracker** is any component or tool that is used to:

> **Observe**, **record**, or **follow specific events or behaviors** within a system, user flow, service, or infrastructure.

It's like a “flight recorder” that helps answer:
- What happened?
- Where did it happen?
- Who did it?
- How often?

---

## 🧱 Tracker Types in DevOps Context

| Tracker Type           | What It Tracks                                    | Example Tools                |
|------------------------|---------------------------------------------------|------------------------------|
| **Error Tracker**      | Uncaught exceptions, stack traces                 | Sentry, Rollbar, Bugsnag     |
| **Event Tracker**      | Custom app events like `order_placed`             | Mixpanel, Segment, Amplitude |
| **Request Tracker**    | HTTP calls, API latencies                         | OpenTelemetry, Zipkin, Jaeger|
| **CI/CD Tracker**      | Pipeline execution, job status                    | GitHub Actions, GitLab CI    |
| **Deployment Tracker** | Version, time, author of deployments              | ArgoCD, Flux, Spinnaker      |
| **Incident Tracker**   | Production incidents, response status             | PagerDuty, Statuspage        |

---

## 🧠 Real Example: Error Tracker in Action (Node.js + Sentry)

```js
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'https://your-sentry-dsn',
  tracesSampleRate: 1.0,
});

app.get('/crash', function mainHandler(req, res) {
  throw new Error("Order processing failed"); // Sentry auto-tracks this
});
