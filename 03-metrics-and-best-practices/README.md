# 📊 Metrics and Monitoring Best Practices

> Part of the [System Observability Guide](../)  
> Author: Abad Naseer  
> Status: ✅ Ready

---

## 📍 What Are Metrics?

**Metrics are numeric, time-series data** collected from a system, service, or application over time. They are **quantitative indicators** of system behavior, performance, and health.

> In simpler words:  
> **"Metrics = numbers + time + meaning."**

---

## 🔧 Example: Web App Metrics

| Metric                     | Example Value | Description                             |
|---------------------------|---------------|-----------------------------------------|
| `cpu_usage_percent`       | 91%           | CPU load over the last 5 minutes        |
| `memory_available_mb`     | 180 MB        | Free memory in container                |
| `http_requests_total`     | 24,013        | Cumulative count of HTTP requests       |
| `http_request_duration_ms`| 145 ms        | Time taken to respond to HTTP request   |
| `disk_space_percent_free` | 15%           | Free disk percentage on root partition  |

---

## 📚 Why Are Metrics Important?

- 📈 **Capacity Planning** – Avoid outages due to high resource usage
- 🚨 **Alerting** – Get notified before a crash (e.g., CPU > 90%)
- 🧪 **Root Cause Analysis** – Spot degradation trends over time
- 📊 **Dashboards** – Real-time visualization (Grafana, Kibana)
- 🔍 **Health Checks** – Integrate with CI/CD and uptime probes

---

## 📌 Golden Signals of Monitoring (Google SRE)

| Signal     | Description                       |
|------------|-----------------------------------|
| **Latency**| Time it takes to serve a request  |
| **Traffic**| Request volume                    |
| **Errors** | Failed requests or operations     |
| **Saturation**| Resource usage (CPU, RAM, Disk) |

> These are the **bare minimum** you should monitor in any production system.

---

## 🧠 Real-Time Example: Metrics in Action

Let’s say your app’s `/checkout` API starts lagging.

### Metric Timeline:

```text
14:00 - http_request_duration_ms = 100 ms
14:01 - http_request_duration_ms = 180 ms
14:02 - http_errors_total = 43
14:03 - memory_usage_percent = 92%
14:04 - cpu_usage_percent = 97%
