# 🚀 Custom Ghost Engine with Native Email Configuration Panel

<p align="center">
  <img src="https://img.shields.io/badge/Ghost-v6.41.0-15171A?style=for-the-badge&logo=ghost" alt="Ghost Version">
  <img src="https://img.shields.io/badge/Docker-Supported-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Supported">
  <img src="https://img.shields.io/badge/Deployment-Instant-success?style=for-the-badge&logo=rocket" alt="Deployment Status">
  <img src="https://img.shields.io/badge/SMTP-Enabled-orange?style=for-the-badge&logo=mailgun" alt="SMTP Enabled">
</p>

---

## ✨ Overview

A production-ready, fully self-contained deployment of **Ghost v6** with a permanently enabled **Native Email Configuration Panel** directly inside the Ghost Admin dashboard.

This custom build modifies Ghost’s internal backend routing and admin configuration visibility logic to expose the native SMTP/Mailgun settings interface without requiring additional production CLI-linked configurations.

> 🔥 Configure your mail system directly from the Ghost Admin UI — no hidden settings, no external hacks, no complicated setup process.

---

# 📦 Included Features

✅ Native SMTP Configuration Panel  
✅ Native Mailgun Configuration Support  
✅ Fully Dockerized Deployment  
✅ Lightweight Self-Contained Architecture  
✅ Production-Ready Ghost v6 Build  
✅ One-Command Instant Startup  
✅ Internal Database Initialization  
✅ Isolated Runtime Environment  
✅ Zero External Service Requirements for Startup  

---

# 🚀 Quick Start

Run instantly with a single command:

```bash
docker run -d -p 2368:2368 --name ghost-custom-email sakthidocker2004/ghost-custom-mail:latest
```

---

# 🌐 Access URLs

| Service | URL |
|---|---|
| Ghost Site | http://localhost:2368 |
| Ghost Admin | http://localhost:2368/ghost |

---

# ⚙️ Container Lifecycle

## 🔄 Pull Phase

Docker automatically downloads the image from Docker Hub if it does not already exist locally.

## 🚀 Boot Phase

The container initializes Ghost with its built-in database engine inside an isolated runtime environment.

## 🌍 Live Phase

Your Ghost publication becomes accessible immediately after startup.

---

# ⏹️ Stop the Container

```bash
docker stop ghost-custom-email
```

---

# 🗑️ Remove the Container

```bash
docker rm ghost-custom-email
```

---

# 🔄 Restart the Container

```bash
docker start ghost-custom-email
```

---

# 📧 Email Configuration

After installation:

1. Open Ghost Admin
2. Navigate to:

```text
Settings → Email Newsletters
```

3. Configure:
   - SMTP
   - Mailgun
   - Email Sender Details

The email configuration card remains permanently visible in this custom build.

---

# 🐳 Docker Hub Repository

Pull directly from Docker Hub:

```bash
docker pull sakthidocker2004/ghost-custom-mail:latest
```

---

# 🛠️ Technology Stack

- Ghost CMS v6
- Docker
- Node.js
- SQLite
- Mailgun Support
- SMTP Support

---

# 📜 Disclaimer

This is a custom-modified Ghost build intended for educational, experimental, and self-hosted deployment purposes.

Ghost® is a trademark of the Ghost Foundation.

---

# ❤️ Author

Developed and maintained by **Sakthi K**

---

<p align="center">
  <b>⚡ One Command. Instant Ghost Deployment. Native Email Configuration Enabled.</b>
</p>