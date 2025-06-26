# Monitoring, Metrics, Logging & Tracing – A Practical Guide

> 📌 Part of the [System Observability Guide](../)  
> 🛠 Author: Abad Naseer  
> 📅 Status: In Progress  

---

## 📍 Overview

This module focuses on how to **monitor, analyze, and trace the internal health of applications, infrastructure, and networks** using industry-standard observability principles.

You’ll learn **what to monitor, why it matters, and how to do it** using real-world tools and workflows.

---

## 🧠 Why Observability?

- To **understand the internal state** of a system based on external outputs.
- Helps detect issues **before users feel them**.
- Answers:
  - **What happened?**
  - **Why did it happen?**
  - **How can we fix/prevent it?**

---

## 🔍 What to Monitor?

- ✅ Application  
- ✅ Infrastructure  
- ✅ Network  

Each layer can fail or degrade — observability connects the dots.

---

## 📊 Key Metrics to Track

| Component | Metric             | Threshold Example       |
|----------|--------------------|--------------------------|
| CPU      | Usage %            | > 90% for 2 hours        |
| Disk     | Free Space %       | < 20% triggers alert     |
| Memory   | Usage + Leaks      | Continuous growth over time |
| HTTP     | Success vs Failure | > 5 failures per 1000 req |
| Tracing  | Latency by hop     | > 10ms on backend call   |

---

## 🧱 The 3 Pillars of Observability

### 1. Metrics  
> Quantitative performance indicators  
🛠 Tooling: **Prometheus, Grafana**  
🧩 Use case: Alert if CPU > 90%

---

### 2. Logs  
> Event-based raw data  
🛠 Tooling: **Loki, ELK Stack**  
🧩 Use case: Find memory error logs before app crash

---

### 3. Traces  
> End-to-end flow across services  
🛠 Tooling: **Jaeger, OpenTelemetry**  
🧩 Use case: Identify 10ms backend delay vs 5ms LB delay

---

## ⚙️ Internal Working (Engineer’s Mindset)

```plaintext
CLIENT
   ↓
Load Balancer (LB)
   ↓ (5ms)
Application
   ↓ (10ms)
Backend Services
   ↓
Database
