# 🚀 Production-Grade CI/CD Pipeline

A production-oriented DevOps project demonstrating how to build, test, containerize, secure, and deploy a Node.js application using modern CI/CD practices.

The project is being developed incrementally, starting with the application and automated testing, followed by Docker, GitHub Actions, security scanning, AWS ECR/EKS, and Kubernetes deployment.

---

## 📌 Project Overview

The goal of this project is to create a reliable and repeatable CI/CD pipeline that automatically:

- Builds the application
- Runs automated tests
- Builds a Docker image
- Performs security and code-quality checks
- Publishes the container image to AWS ECR
- Deploys the application to Kubernetes
- Supports development, staging, and production environments
- Provides a rollback mechanism

### Architecture

```text
Developer
    │
    ▼
 GitHub
    │
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    ├── Run Tests
    ├── Build Docker Image
    ├── Trivy Security Scan
    └── SonarQube Analysis
            │
            ▼
        AWS ECR
            │
            ▼
       Kubernetes / EKS
            │
       ┌────┼────┐
       ▼    ▼    ▼
      DEV STAGING PROD
```

---

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API framework |
| Jest | Automated testing |
| Supertest | API testing |
| Git | Version control |
| GitHub | Source code management |
| Docker | Containerization |
| Kubernetes | Container orchestration |
| GitHub Actions | CI/CD automation |
| Trivy | Container vulnerability scanning |
| SonarQube | Code quality and security analysis |
| AWS ECR | Container image registry |
| AWS EKS | Managed Kubernetes |

---

## 📂 Project Structure

```text
production-cicd-pipeline/
│
├── src/
│   └── server.js
│
├── tests/
│   └── server.test.js
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── Dockerfile
├── .dockerignore
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

> Some directories and files will be added as the project progresses.

---

## 🌐 Application API

The application currently provides three endpoints.

### Home

```http
GET /
```

Response:

```json
{
  "message": "Production CI/CD Pipeline API",
  "status": "running"
}
```

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "healthy"
}
```

### Application Information

```http
GET /api/info
```

Response:

```json
{
  "application": "Production CI/CD Pipeline",
  "version": "1.0.0",
  "environment": "development"
}
```

---

## 💻 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/production-cicd-pipeline.git
```

```bash
cd production-cicd-pipeline
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

```bash
npm test
```

Expected result:

```text
Test Suites: 1 passed
Tests:       3 passed
```

### 4. Start the application

```bash
npm start
```

The application runs on:

```text
http://localhost:3000
```

---

## 🐳 Docker

The application is containerized using a multi-stage Dockerfile.

### Build the image

```bash
docker build -t production-cicd-pipeline:1.0 .
```

### Run the container

```bash
docker run -d \
  --name production-cicd-api \
  -p 3000:3000 \
  production-cicd-pipeline:1.0
```

### Check the application

```bash
curl http://localhost:3000/health
```

Expected:

```json
{
  "status": "healthy"
}
```

The container is configured to run the application using a non-root user.

---

## ☸️ Kubernetes

Kubernetes deployment manifests are maintained under:

```text
k8s/
```

The planned Kubernetes architecture includes:

```text
Kubernetes Cluster
       │
       ▼
 Deployment
       │
   ┌───┴───┐
   ▼       ▼
 Pod      Pod
   │       │
   └───┬───┘
       ▼
    Service
```

Kubernetes deployment will be integrated after the CI pipeline and container workflow are completed.

---

## 🔄 CI/CD Pipeline

The planned CI/CD workflow is:

```text
Git Push / Pull Request
          │
          ▼
    GitHub Actions
          │
          ▼
 Install Dependencies
          │
          ▼
     Run Tests
          │
          ▼
    Docker Build
          │
          ▼
   Trivy Security Scan
          │
          ▼
    SonarQube Scan
          │
          ▼
       AWS ECR
          │
          ▼
      Kubernetes
          │
     ┌────┼────┐
     ▼    ▼    ▼
    DEV STAGING PROD
```

The production deployment will use manual approval through GitHub Environments.

---

## 🔐 Security

Security is an important part of this project.

Planned security controls include:

- Trivy container vulnerability scanning
- SonarQube code-quality and security analysis
- Non-root Docker containers
- AWS IAM roles
- GitHub Actions OIDC authentication
- No long-lived AWS access keys in GitHub secrets
- Vulnerability gates before image publishing

---

## 🏷️ Docker Image Versioning

Docker images will be tagged using the Git commit SHA.

Example:

```text
production-cicd-pipeline:8f42a91...
```

This provides:

- Immutable image versions
- Deployment traceability
- Easy rollback
- Clear connection between code and deployment

---

## 🔙 Rollback Strategy

If a production deployment fails, the previous image version can be redeployed.

Example:

```bash
kubectl rollout undo deployment/production-cicd-api
```

Alternatively, a previous commit-SHA image can be deployed.

---

## 📊 Project Progress

| Component | Status |
|---|---|
| Node.js API | ✅ Completed |
| Express.js | ✅ Completed |
| Unit Tests | ✅ Completed |
| Git Repository | ✅ Completed |
| GitHub Repository | ✅ Completed |
| Dockerfile | ✅ Created |
| Docker Container | ⏳ In Progress |
| GitHub Actions CI | ⏳ Planned |
| Trivy | ⏳ Planned |
| SonarQube | ⏳ Planned |
| AWS ECR | ⏳ Planned |
| AWS OIDC | ⏳ Planned |
| Kubernetes | ⏳ Planned |
| AWS EKS | ⏳ Planned |
| DEV Environment | ⏳ Planned |
| STAGING Environment | ⏳ Planned |
| PROD Environment | ⏳ Planned |
| Rollback | ⏳ Planned |

---

## 🎯 Project Goals

By completing this project, the following DevOps concepts will be demonstrated:

- Continuous Integration
- Continuous Delivery
- Containerization
- Automated Testing
- Container Security
- Static Code Analysis
- AWS Container Registry
- Kubernetes Deployment
- Environment Promotion
- Production Approval
- Immutable Image Versioning
- Deployment Rollback
- CI/CD Security

---

## 📸 Project Showcase

The final GitHub repository will include:

- CI/CD pipeline diagram
- Successful GitHub Actions workflow
- Docker build
- Trivy security scan
- SonarQube analysis
- AWS ECR image
- Kubernetes deployment
- Production deployment
- Rollback demonstration

---

## 👨‍💻 Author

**Madhu**

B.Tech CSE (AIML) Graduate  
Aspiring DevOps & Cloud Engineer

### Skills Demonstrated

```text
Linux
Git
GitHub
Docker
Kubernetes
GitHub Actions
Jenkins
AWS
CI/CD
DevSecOps
```

---

## ⭐ Project Status

🚧 **Currently under development**

This project is being built step-by-step as a practical DevOps portfolio project, progressing from application development to a production-style CI/CD and Kubernetes deployment environment.
